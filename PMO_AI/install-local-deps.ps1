$projectDir = 'C:\D Drive\0 IK AI Course\Projects\PMO_AI'
$nodeHome = Join-Path $projectDir 'node-local\node-v20.20.1-win-x64'
if (-not (Test-Path -LiteralPath $projectDir)) {
    Write-Error "Project directory not found: $projectDir"
    exit 1
}
if (-not (Test-Path -LiteralPath (Join-Path $nodeHome 'node.exe'))) {
    Write-Error "Local node.exe not found under $nodeHome"
    exit 1
}
Set-Location -LiteralPath $projectDir
$env:PATH = "$nodeHome;$env:PATH"
Write-Output "Project directory: $projectDir"
Write-Output "Node home: $nodeHome"
Write-Output "Node executable: $(Get-Command -Name node -ErrorAction SilentlyContinue)"
Write-Output "Cleaning existing node_modules..."
Remove-Item -LiteralPath (Join-Path $projectDir 'node_modules') -Recurse -Force -ErrorAction SilentlyContinue
Write-Output "Running npm install..."
& "$nodeHome\npm.cmd" install --scripts-prepend-node-path=auto
$exitCode = $LASTEXITCODE
if ($exitCode -ne 0) {
    Write-Error "npm install exited with code $exitCode"
}
exit $exitCode
