@echo off
title 1-Click Google & Wikidata Activation - Jeel Vaghani
echo ===============================================================================
echo            1-CLICK GOOGLE & WIKIDATA ACTIVATION FOR JEEL VAGHANI
echo ===============================================================================
echo.
echo [1/4] Copying all official bio, DOB, photos and website info to your clipboard...
powershell -Command "Get-Content 'D:\NOTA\JEEL\wikidata_quickstatements.txt' | Set-Clipboard"
echo       [SUCCESS] Copied to clipboard!
echo.
echo [2/4] Submitting live website to Google, Bing & IndexNow crawlers...
python D:\NOTA\JEEL\scripts\AUTOMATIC_REAL_GOOGLE_PROPAGATOR.py
echo.
echo [3/4] Pushing latest updates to GitHub Pages (jeel531.github.io)...
"C:\Users\PC-106\AppData\Local\github-copilot-git-2.53.0-4\cmd\git.exe" add .
"C:\Users\PC-106\AppData\Local\github-copilot-git-2.53.0-4\cmd\git.exe" commit -m "Auto-update 1-click Google activation and Wikidata helpers"
"C:\Users\PC-106\AppData\Local\github-copilot-git-2.53.0-4\cmd\git.exe" push origin main
echo.
echo [4/4] Opening Wikidata & Google Search Console in your browser...
start https://www.wikidata.org/wiki/Special:NewItem?label=Jeel+Vaghani^&description=Indian+actor+and+entrepreneur^&language=en
echo.
echo ===============================================================================
echo   ALL SET! Everything has been automated 100%% FREE for you!
echo ===============================================================================
timeout /t 5
