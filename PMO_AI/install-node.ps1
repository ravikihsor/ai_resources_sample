$ErrorActionPreference = 'Stop'

Set-Location -Path "c:\D Drive\0 IK AI Course\Projects\PMO_AI"

$nodeUrl = 'https://nodejs.org/dist/v20.20.1/node-v20.20.1-win-x64.zip'
$zipFile = Join-Path -Path (Get-Location) -ChildPath 'node-win.zip'
$extractDir = Join-Path -Path (Get-Location) -ChildPath 'node-local'

Write-Output "Downloading Node.js from $nodeUrl"
Invoke-WebRequest -Uri $nodeUrl -OutFile $zipFile

if (Test-Path $extractDir) {
    Remove-Item -Path $extractDir -Recurse -Force
}

Write-Output "Extracting Node.js to $extractDir"
Expand-Archive -LiteralPath $zipFile -DestinationPath $extractDir -Force
Remove-Item -Path $zipFile -Force

Write-Output "Node.js extracted successfully"
Write-Output "Node path: $extractDir"

$nodeExe = Join-Path -Path $extractDir -ChildPath 'node-v20.20.1-win-x64\node.exe'
$npmCli = Join-Path -Path $extractDir -ChildPath 'node-v20.20.1-win-x64\npm.cmd'

if (-Not (Test-Path $nodeExe)) {
    throw "Node executable not found at $nodeExe"
}

& $nodeExe --version
& $npmCli --version
