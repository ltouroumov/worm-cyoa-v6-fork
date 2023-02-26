@echo off

where /q python3
if errorlevel 1 (
    echo Cannot find the 'python3' program.
    echo Make sure you have it installed.
    pause
    exit /b
) else (
    echo Found Python
    call python3 --version
)

echo Setting things up ...
echo (this can take a while the first time)
call python3 -m pip install poetry
set POETRY=call python3 -m poetry

set BASEDIR="%~dp0"
echo Base Directory is %BASEDIR%
cd %BASEDIR%

%POETRY% install
set TOOLS=%POETRY% run -- python -m cyoa.tools.client

if "%~1"=="" (
    echo ERROR: No file provided!
    echo Drag a file on the script
    pause
    exit /b
)

set INPUT="%~1"
set VERSION=v17
set VIEWER=viewer-beta

set PROJECT="project-%VERSION%.json"

echo Copying %INPUT% to %PROJECT%
call copy %INPUT% %BASEDIR%\%PROJECT%

%TOOLS% project.format --project %PROJECT% --skip-backup
%TOOLS% media.optimize --project %PROJECT% --write
%TOOLS% project.patch --project %PROJECT% ^
  --patch cyoa.patch:FixScoreLabels ^
          cyoa.patch:FixConditionLabels ^
          cyoa.patch:FixMultiSelectCounters
%TOOLS% build --input %PROJECT% --output %VIEWER%

pause