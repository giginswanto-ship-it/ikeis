@echo off
title Server IKEIS Jabodetabek
echo Memulai server lokal IKEIS...
start http://localhost:3000
node "%~dp0server.js"
pause
