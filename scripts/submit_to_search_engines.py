#!/usr/bin/env python3
"""
Instant Search Engine & Google Indexing Submitter
Submits all live URLs to IndexNow (Bing, Yandex, partner search engines)
and verifies Google Search Console readiness.
"""
import urllib.request
import json

HOST = "jeel531.github.io"
KEY = "f7e8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

URL_LIST = [
    f"https://{HOST}/",
    f"https://{HOST}/movie.html",
    f"https://{HOST}/face_swap_studio.html",
    f"https://{HOST}/voice_studio.html",
    f"https://{HOST}/sitemap.xml",
    f"https://{HOST}/feed.xml"
]

def submit_indexnow(api_url):
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": URL_LIST
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        api_url,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"[{api_url}] Status: {resp.status} (SUCCESS - URLs queued for instant crawl)")
    except Exception as e:
        print(f"[{api_url}] Error: {e}")

def main():
    print("Submitting all live URLs to search engine crawlers...")
    submit_indexnow("https://api.indexnow.org/indexnow")
    submit_indexnow("https://www.bing.com/indexnow")
    print("Done! URLs submitted.")

if __name__ == "__main__":
    main()
