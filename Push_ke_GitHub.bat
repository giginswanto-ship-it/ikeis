@echo off
title Push IKEIS ke GitHub (giginswanto-ship-it/ikeis)
color 0A
echo ========================================================
echo   UPLOAD / PUSH REPOSITORY IKEIS KE GITHUB
echo   Target: https://github.com/giginswanto-ship-it/ikeis
echo ========================================================
echo.

cd /d "%~dp0"

echo Status Commit Git Lokal:
git log -n 1 --oneline
echo.

echo Pilih Metode Autentikasi:
echo [1] Login via Browser (Git Credential Manager - Otomatis & Direkomendasikan)
echo [2] Masukkan Personal Access Token (PAT) GitHub
echo.
set /p PILIHAN="Pilihan Anda (1 atau 2, default 1): "

if "%PILIHAN%"=="2" (
    goto PUSH_WITH_TOKEN
) else (
    goto PUSH_WITH_BROWSER
)

:PUSH_WITH_BROWSER
echo.
echo Menjalankan push via Browser Login...
echo (Jendela browser akan otomatis terbuka untuk konfirmasi login ke GitHub).
git -c credential.helper=manager push origin main
goto FINISH

:PUSH_WITH_TOKEN
echo.
echo Buat token baru di: https://github.com/settings/tokens (centang scope 'repo')
set /p TOKEN="Masukkan Token GitHub Baru Anda: "
if "%TOKEN%"=="" (
    echo [ERROR] Token tidak boleh kosong!
    pause
    exit /b 1
)
echo.
echo Melakukan push dengan Token ke GitHub...
git -c credential.helper= push "https://giginswanto-ship-it:%TOKEN%@github.com/giginswanto-ship-it/ikeis.git" main
goto FINISH

:FINISH
if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo   [SUKSES] Repository berhasil di-push ke GitHub!
    echo   Kunjungi: https://github.com/giginswanto-ship-it/ikeis
    echo ========================================================
) else (
    echo.
    echo [CATATAN] Jika gagal, pastikan akun GitHub Anda (giginswanto-ship-it) memiliki izin ke repository 'ikeis'.
)

echo.
pause
