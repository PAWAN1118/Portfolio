@echo off
cd /d "%~dp0"
"C:\Users\nimma\AppData\Local\Programs\Python\Python310\python.exe" -m http.server 8000 --bind 127.0.0.1
pause
