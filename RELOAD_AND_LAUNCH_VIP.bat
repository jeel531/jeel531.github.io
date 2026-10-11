@echo off
title VIP Celebrity System - Jeel Vaghani (Instagram + Google)
echo ===============================================================================
echo   JEEL VAGHANI - OFFICIAL VIP BLUE TICK & GOOGLE CELEBRITY SYSTEM
echo ===============================================================================
echo.
echo Activating extension and launching Chrome with verified profiles...
echo.

set EXT_DIR=D:\NOTA\JEEL\google_celebrity_extension
set CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe"

:: Close background Chrome instances so --load-extension takes effect immediately
taskkill /F /IM chrome.exe >nul 2>&1
timeout /t 1 /nobreak >nul

if exist %CHROME% (
    start "" %CHROME% --load-extension="%EXT_DIR%" "https://www.google.com/search?q=jeel+vaghani" "https://www.instagram.com/vaghani_01/" "file:///D:/NOTA/JEEL/google.html"
    exit /b
)

:: Edge fallback
set EDGE="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
taskkill /F /IM msedge.exe >nul 2>&1
timeout /t 1 /nobreak >nul

if exist %EDGE% (
    start "" %EDGE% --load-extension="%EXT_DIR%" "https://www.google.com/search?q=jeel+vaghani" "https://www.instagram.com/vaghani_01/" "file:///D:/NOTA/JEEL/google.html"
    exit /b
)

start "" "https://www.google.com/search?q=jeel+vaghani"
start "" "https://www.instagram.com/vaghani_01/"
exit /b
