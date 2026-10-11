#!/usr/bin/env python3
"""
AUTOMATIC REAL GOOGLE & SEARCH ENGINE PROPAGATOR
1. Pings Google, Bing, IndexNow search crawlers.
2. Generates automated Wikidata Entity Payload (JSON-LD + QuickStatements).
"""
import urllib.request
import json
import os

HOST = "jeel531.github.io"
KEY = "f7e8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

URL_LIST = [
    f"https://{HOST}/",
    f"https://{HOST}/google.html",
    f"https://{HOST}/movie.html",
    f"https://{HOST}/face_swap_studio.html",
    f"https://{HOST}/voice_studio.html",
    f"https://{HOST}/sitemap.xml",
    f"https://{HOST}/feed.xml"
]

def ping_crawlers():
    print(">>> 1. Pinging Search Engines...")
    # IndexNow
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": URL_LIST
    }
    data = json.dumps(payload).encode("utf-8")
    for endpoint in ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"]:
        try:
            req = urllib.request.Request(endpoint, data=data, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                print(f"[{endpoint}] Status: {resp.status} (SUCCESS)")
        except Exception as e:
            print(f"[{endpoint}] Notice: {e}")

    # Google Sitemap Ping
    try:
        g_url = f"https://www.google.com/ping?sitemap=https://{HOST}/sitemap.xml"
        req = urllib.request.Request(g_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"[Google Sitemap Ping] Status: {resp.status}")
    except Exception as e:
        print(f"[Google Sitemap Ping] Notice: {e}")

def generate_wikidata_payload():
    print(">>> 2. Generating Automated Wikidata Entity Payload...")
    # Wikidata QuickStatements Format for Jeel Vaghani
    # P31: instance of -> Q5 (human)
    # P106: occupation -> Q33999 (actor), Q188442 (software architect)
    # P569: date of birth -> +2003-04-23T00:00:00Z/11
    # P27: country of citizenship -> Q668 (India)
    # P856: official website -> https://jeel531.github.io
    # P2002: Twitter username -> jeelvaghani
    # P2003: Instagram username -> vaghani_01
    
    quickstatements = """CREATE
LAST|Len|"Jeel Vaghani"
LAST|Den|"Indian actor and Chief Enterprise Systems Architect"
LAST|Lgu|"જીલ વાઘાણી"
LAST|Dgu|"ભારતીય અભિનેતા અને એન્ટરપ્રાઇઝ આર્કિટેક્ટ"
LAST|P31|Q5
LAST|P106|Q33999
LAST|P106|Q188442
LAST|P569|+2003-04-23T00:00:00Z/11
LAST|P27|Q668
LAST|P856|"https://jeel531.github.io"
LAST|P2003|"vaghani_01"
"""
    with open("wikidata_quickstatements.txt", "w", encoding="utf-8") as f:
        f.write(quickstatements)
    print("[Wikidata] Quickstatements generated in wikidata_quickstatements.txt")

if __name__ == "__main__":
    ping_crawlers()
    generate_wikidata_payload()
    print(">>> Done! All crawler pings and entity files ready.")
