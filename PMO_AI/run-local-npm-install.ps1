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
Push-Location -LiteralPath $projectDir
try {
    $env:PATH = "$nodeHome;$env:PATH"
    Write-Output "Using project: $projectDir"
    Write-Output "Using node home: $nodeHome"
    Write-Output "Node path visible: $(Get-Command -Name node -ErrorAction SilentlyContinue)"
    & "$nodeHome\npm.cmd" install
    $rc = $LASTEXITCODE
    if ($rc -ne 0) {
        Write-Error "npm install failed with exit code $rc"
        exit $rc
    }
} finally {
    Pop-Location
}
