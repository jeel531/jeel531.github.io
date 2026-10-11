@echo off
title Push Updates to GitHub Pages (jeel531.github.io)
echo ===================================================
echo Pushing google.html and updates to GitHub Pages...
echo ===================================================
"C:\Users\PC-106\AppData\Local\github-copilot-git-2.53.0-4\cmd\git.exe" push origin main
echo.
if %errorlevel% equ 0 (
    echo [SUCCESS] Successfully pushed to GitHub!
    echo Changes will be live on https://jeel531.github.io/google.html in 30-60 seconds.
) else (
    echo [NOTICE] Please complete GitHub authorization in the prompt window.
)
timeout /t 5
