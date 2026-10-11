@echo off
title Google Celebrity Setup & Launcher for Jeel Vaghani
echo ===============================================================================
echo   JEEL VAGHANI - OFFICIAL GOOGLE CELEBRITY & KNOWLEDGE PANEL SYSTEM
echo ===============================================================================
echo.
echo Launching Google Search for Jeel Vaghani with Celebrity Extension...
echo.

set EXT_DIR=D:\NOTA\JEEL\google_celebrity_extension
set URL=https://www.google.com/search?q=jeel+vaghani

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
