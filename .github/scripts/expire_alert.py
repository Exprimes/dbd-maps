"""Coupe l'alerte admin de version.json quand sa date de fin ("expires") est passée.

L'admin écrit admin_alert.expires (UTC, ex : 2026-11-20T18:00:00Z) ; ce script,
lancé toutes les 15 min par GitHub Actions, met enabled à false une fois la date passée.
"""
import json
import sys
from datetime import datetime, timezone


def expire(data, now):
    alert = data.get("admin_alert")
    if not isinstance(alert, dict) or not alert.get("enabled") or not alert.get("expires"):
        return False
    try:
        end = datetime.fromisoformat(str(alert["expires"]).replace("Z", "+00:00"))
    except ValueError:
        return False
    if end.tzinfo is None:
        end = end.replace(tzinfo=timezone.utc)
    if now < end:
        return False
    alert["enabled"] = False
    return True


def main(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    data = json.loads(text)
    if not expire(data, datetime.now(timezone.utc)):
        print("Alerte : rien à couper")
        return
    # Garde l'indentation du fichier (2 ou 4 espaces) et les accents tels quels.
    second = text.splitlines()[1] if len(text.splitlines()) > 1 else "  "
    indent = len(second) - len(second.lstrip(" ")) or 2
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=indent, ensure_ascii=False)
    print("Alerte coupée : date de fin atteinte")


if __name__ == "__main__":
    t = datetime(2026, 11, 20, tzinfo=timezone.utc)
    on = lambda exp: {"admin_alert": {"enabled": True, "expires": exp}}
    assert expire(on("2026-11-19T00:00:00Z"), t) is True
    assert expire(on("2026-11-21T00:00:00Z"), t) is False
    assert expire({"admin_alert": {"enabled": True}}, t) is False
    assert expire(on("pas une date"), t) is False
    main(sys.argv[1])
