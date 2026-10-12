@echo off
title Push IKEIS ke GitHub (giginswanto-ship-it/ikeis)
color 0A
echo ========================================================
echo   UPLOAD / PUSH REPOSITORY IKEIS KE GITHUB
echo   Target: https://github.com/giginswanto-ship-it/ikeis
echo ========================================================
echo.

cd /d "%~dp0"

echo 1. Memeriksa status Git lokal...
git status -s
echo.

echo 2. Masukkan Personal Access Token (PAT) GitHub Anda.
echo    (Catatan: Token 'ghp_...' lama mungkin telah kedaluwarsa atau di-revoke oleh GitHub).
echo    Buat token baru di: https://github.com/settings/tokens (pilih scope 'repo')
echo.
set /p TOKEN="Masukkan Token GitHub Baru Anda: "

if "%TOKEN%"=="" (
    echo [ERROR] Token tidak boleh kosong!
    pause
    exit /b 1
)

echo.
echo 3. Melakukan push branch 'main' ke GitHub...
git push "https://giginswanto-ship-it:%TOKEN%@github.com/giginswanto-ship-it/ikeis.git" main:main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo   [SUKSES] Repository berhasil di-push ke GitHub!
    echo   Kunjungi: https://github.com/giginswanto-ship-it/ikeis
    echo ========================================================
) else (
    echo.
    echo [GAGAL] Push gagal. Silakan periksa apakah token valid dan memiliki izin 'repo'.
)

echo.
pause
