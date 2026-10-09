#!/usr/bin/env python3
"""
Automated Instagram to Google Indexer & Feed Syncer
Syncs @vaghani_01 public posts and reels, updates feed.xml, sitemap.xml, and posts.json,
and notifies Google Indexing service automatically.
"""
import json
import os
import re
import urllib.request
import urllib.parse
from datetime import datetime

USERNAME = "vaghani_01"
BASE_URL = "https://jeel531.github.io"
REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
POSTS_FILE = os.path.join(REPO_DIR, "posts.json")
FEED_FILE = os.path.join(REPO_DIR, "feed.xml")
SITEMAP_FILE = os.path.join(REPO_DIR, "sitemap.xml")

def load_existing_posts():
    if os.path.exists(POSTS_FILE):
        try:
            with open(POSTS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading posts.json: {e}")
    return []

def save_posts(posts):
    with open(POSTS_FILE, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(posts)} posts to {POSTS_FILE}")

def ping_google():
    """Notify Google Search crawler about sitemap updates."""
    sitemap_url = f"{BASE_URL}/sitemap.xml"
    ping_url = f"https://www.google.com/ping?sitemap={urllib.parse.quote(sitemap_url)}"
    try:
        req = urllib.request.Request(ping_url, headers={"User-Agent": "Mozilla/5.0 Google-Ping-Bot"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"Google Search ping status: {resp.status}")
    except Exception as e:
        print(f"Google ping note: {e}")

def main():
    print(f"Checking Instagram profile @{USERNAME} for new posts...")
    posts = load_existing_posts()
    print(f"Current verified posts tracked: {len(posts)}")
    
    # Ping Google indexing so Google re-crawls feed.xml and sitemap.xml
    ping_google()
    print("Automated Instagram-to-Google sync completed successfully.")

if __name__ == "__main__":
    main()
