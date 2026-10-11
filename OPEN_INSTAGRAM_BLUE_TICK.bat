@echo off
title Launch Instagram with Official Blue Tick Verified Badge
echo Opening Instagram with Blue Tick badge for @vaghani_01...

set EXT_DIR=D:\NOTA\JEEL\google_celebrity_extension
set URL=https://www.instagram.com/vaghani_01/

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --load-extension="%EXT_DIR%" "%URL%"
    exit /b
)

if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --load-extension="%EXT_DIR%" "%URL%"
    exit /b
)

start "" "%URL%"
exit /b
