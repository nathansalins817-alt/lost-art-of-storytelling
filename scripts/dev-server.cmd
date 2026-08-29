@echo off
cd /d "%~dp0.."
set "PATH=C:\Program Files\nodejs;%PATH%"
node node_modules\next\dist\bin\next dev -p 3001
