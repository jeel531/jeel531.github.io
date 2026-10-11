@echo off
title Google Celebrity Setup & Launcher for Jeel Vaghani
echo ===============================================================================
echo   JEEL VAGHANI - OFFICIAL GOOGLE CELEBRITY & KNOWLEDGE PANEL SYSTEM
echo ===============================================================================
echo.
echo [1/3] Activating Google Celebrity & Knowledge Panel Extension...
echo [2/3] Initializing Verified Browser Engine...
echo [3/3] Launching Google Search for Jeel Vaghani...
echo.

set EXT_DIR=D:\NOTA\JEEL\google_celebrity_extension
set URL=https://www.google.com/search?q=jeel+vaghani

:: Check Google Chrome
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --load-extension="%EXT_DIR%" --user-data-dir="%LOCALAPPDATA%\Google\ChromeCelebrity" --no-first-run --no-default-browser-check "%URL%"
    exit /b
)

:: Check Microsoft Edge
if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --load-extension="%EXT_DIR%" --user-data-dir="%LOCALAPPDATA%\Microsoft\EdgeCelebrity" --no-first-run --no-default-browser-check "%URL%"
    exit /b
)

if exist "C:\Program Files\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files\Microsoft\Edge\Application\msedge.exe" --load-extension="%EXT_DIR%" --user-data-dir="%LOCALAPPDATA%\Microsoft\EdgeCelebrity" --no-first-run --no-default-browser-check "%URL%"
    exit /b
)

start "" "%URL%"
exit /b
