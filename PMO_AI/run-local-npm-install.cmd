@echo off
setlocal enabledelayedexpansion
set "PROJECT_DIR=C:\D Drive\0 IK AI Course\Projects\PMO_AI"
set "NODE_HOME=C:\D Drive\0 IK AI Course\Projects\PMO_AI\node-local\node-v20.20.1-win-x64"
cd /d "%PROJECT_DIR%"
if not exist "%NODE_HOME%\node.exe" (
  echo ERROR: local node executable not found at "%NODE_HOME%\node.exe"
  exit /b 1
)
set "PATH=%NODE_HOME%;%PATH%"
"%NODE_HOME%\npm.cmd" install
if errorlevel 1 (
  echo ERROR: npm install failed with exit code %errorlevel%
  exit /b %errorlevel%
)
endlocal
