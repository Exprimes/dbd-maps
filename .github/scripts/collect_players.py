"""Ajoute les appareils vus sur les relais ntfy (PC + mobile) à players.json.

ntfy ne garde les messages que quelques heures : ce script, lancé toutes les 15 min
par GitHub Actions, garde la liste complète des appareils depuis toujours.
Format identique au cache de l'admin : [{"ClientId", "Version", "Os", "Timestamp"}].
"""
import json
import re
import sys
import urllib.request

SERVERS = ["https://ntfy.tedomum.fr/", "https://ntfy.envs.net/", "https://ntfy.adminforge.de/"]
TOPICS = ["dbdmaps731-ACTIVE_USERS", "dbdmaps731-ACTIVE_USERS_MOB"]
# Les topics ntfy sont publics : on ne garde que des valeurs au format attendu, et on plafonne la taille.
FIELD = re.compile(r"^[A-Za-z0-9._\-]{1,64}$")
MAX_DEVICES = 50000


def parse(text, server_time):
    parts = [p.strip() for p in (text or "").split(":")]
    if len(parts) < 2 or not FIELD.match(parts[0]) or not FIELD.match(parts[1]):
        return None
    os_name = parts[2] if len(parts) >= 3 and FIELD.match(parts[2]) else "win"
    # Heure du serveur ntfy et non celle envoyée par le client, qui peut être fausse.
    return {"ClientId": parts[0], "Version": parts[1], "Os": os_name, "Timestamp": int(server_time)}


def fetch(server, topic):
    req = urllib.request.Request(f"{server}{topic}/json?poll=1&since=all", headers={"User-Agent": "dbdmaps-players"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        for line in resp.read().decode("utf-8").splitlines():
            try:
                ev = json.loads(line)
            except ValueError:
                continue
            if ev.get("event") == "message":
                yield parse(ev.get("message"), ev.get("time", 0))


def merge(devices, entry):
    key = entry["ClientId"].lower()
    old = devices.get(key)
    if old is None and len(devices) >= MAX_DEVICES:
        return
    if old is None or entry["Timestamp"] > old["Timestamp"]:
        devices[key] = entry


def main(path):
    try:
        with open(path, encoding="utf-8") as f:
            existing = json.load(f)
    except FileNotFoundError:
        existing = []
    devices = {}
    for e in existing:
        merge(devices, e)

    reached = 0
    for server in SERVERS:
        for topic in TOPICS:
            try:
                for entry in fetch(server, topic):
                    if entry:
                        merge(devices, entry)
                reached += 1
            except Exception as ex:  # un serveur en panne ne doit pas bloquer les autres
                print(f"::warning::{server}{topic} : {ex}")
    if reached == 0:
        sys.exit("Aucun serveur ntfy joignable, players.json non modifié.")

    out = sorted(devices.values(), key=lambda e: e["Timestamp"], reverse=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=1)
    print(f"{len(existing)} -> {len(out)} appareils")


if __name__ == "__main__":
    assert parse("PC-abc12:2.2.1.0:win:1700000000", 5) == {"ClientId": "PC-abc12", "Version": "2.2.1.0", "Os": "win", "Timestamp": 5}
    assert parse("x", 5) is None and parse("bad id!:1.0", 5) is None
    main(sys.argv[1])
