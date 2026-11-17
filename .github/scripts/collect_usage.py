"""Cumule les statistiques d'utilisation envoyées par l'appli (topic ntfy USAGE) dans usage.json.

Message attendu, une fois par session : "<appareil>:<version>:<fonction>=<nombre>,<fonction>=<nombre>"
ex : "PC-67A5B8B5:2.2.5.0:ocr=12,lobby=3,map_open=40"
ntfy renvoie les mêmes messages à chaque passage : on retient les identifiants déjà comptés.
Format : {"features": {nom: {"uses": total, "devices": [appareils]}}, "seen": {id_message: heure}}
"""
import json
import re
import sys
import time
import urllib.request

SERVERS = ["https://ntfy.tedomum.fr/", "https://ntfy.envs.net/", "https://ntfy.adminforge.de/"]
TOPIC = "dbdmaps731-USAGE"
# Topic public : on n'accepte que le format attendu, avec des plafonds contre le spam.
ID = re.compile(r"^[A-Za-z0-9._\-]{1,64}$")
FEATURE = re.compile(r"^[a-z0-9_]{1,32}$")
MAX_PER_MESSAGE = 1000
MAX_FEATURES = 100
MAX_DEVICES_PER_FEATURE = 50000
SEEN_TTL = 3 * 86400  # plus long que la durée de garde des serveurs ntfy


def parse(text):
    parts = (text or "").split(":", 2)
    if len(parts) != 3 or not ID.match(parts[0]) or not ID.match(parts[1]):
        return None
    counts = {}
    for item in parts[2].split(","):
        name, _, value = item.partition("=")
        if FEATURE.match(name) and value.isdigit():
            counts[name] = min(int(value), MAX_PER_MESSAGE)
    return (parts[0], counts) if counts else None


def apply(data, msg_id, msg_time, text):
    if msg_id in data["seen"]:
        return
    data["seen"][msg_id] = msg_time
    parsed = parse(text)
    if not parsed:
        return
    device, counts = parsed
    for name, n in counts.items():
        feat = data["features"].get(name)
        if feat is None:
            if len(data["features"]) >= MAX_FEATURES:
                continue
            feat = data["features"][name] = {"uses": 0, "devices": []}
        feat["uses"] += n
        if device not in feat["devices"] and len(feat["devices"]) < MAX_DEVICES_PER_FEATURE:
            feat["devices"].append(device)


def main(path):
    try:
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = {}
    data.setdefault("features", {})
    data.setdefault("seen", {})

    reached = 0
    for server in SERVERS:
        try:
            req = urllib.request.Request(f"{server}{TOPIC}/json?poll=1&since=all", headers={"User-Agent": "dbdmaps-usage"})
            with urllib.request.urlopen(req, timeout=20) as resp:
                for line in resp.read().decode("utf-8").splitlines():
                    try:
                        ev = json.loads(line)
                    except ValueError:
                        continue
                    if ev.get("event") == "message" and ev.get("id"):
                        apply(data, ev["id"], int(ev.get("time", 0)), ev.get("message"))
            reached += 1
        except Exception as ex:  # un serveur en panne ne doit pas bloquer les autres
            print(f"::warning::{server}{TOPIC} : {ex}")
    if reached == 0:
        sys.exit("Aucun serveur ntfy joignable, usage.json non modifié.")

    cutoff = time.time() - SEEN_TTL
    data["seen"] = {k: v for k, v in data["seen"].items() if v >= cutoff}
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=1)
    print(f"{len(data['features'])} fonctions suivies")


if __name__ == "__main__":
    d = {"features": {}, "seen": {}}
    apply(d, "a", 1, "PC-1:2.2.5.0:ocr=2,lobby=1")
    apply(d, "a", 1, "PC-1:2.2.5.0:ocr=2,lobby=1")  # même message relu : compté une seule fois
    apply(d, "b", 1, "PC-2:2.2.5.0:ocr=999999,BAD=1")
    assert d["features"]["ocr"] == {"uses": 2 + MAX_PER_MESSAGE, "devices": ["PC-1", "PC-2"]}
    assert "BAD" not in d["features"] and parse("n'importe quoi") is None
    main(sys.argv[1])
