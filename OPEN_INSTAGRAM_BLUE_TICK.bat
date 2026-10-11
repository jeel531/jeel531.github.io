@echo off
title Launch Instagram with Official Blue Tick Verified Badge
echo Opening Instagram with Blue Tick badge for @vaghani_01...

if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --load-extension="D:\NOTA\JEEL\ig_blue_tick_extension" "https://www.instagram.com/vaghani_01/"
    exit
)

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --load-extension="D:\NOTA\JEEL\ig_blue_tick_extension" "https://www.instagram.com/vaghani_01/"
    exit
)

start "" "https://www.instagram.com/vaghani_01/"
