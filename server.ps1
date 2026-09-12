# ==========================================================================
# Serveur Web Local pour Jawad LY - Portfolio & CV
# ==========================================================================

$ports = @(5000, 5001, 8080, 3000)
$root = "C:\Users\HP\cv izisaas"
$listener = $null
$activePort = 0

foreach ($p in $ports) {
    try {
        $l = New-Object System.Net.HttpListener
        $l.Prefixes.Add("http://localhost:$p/")
        $l.Start()
        $listener = $l
        $activePort = $p
        break
    } catch {
        if ($l) { $l.Close() }
    }
}

if (-not $listener) {
    Write-Host "Impossible de démarrer le serveur local." -ForegroundColor Red
    exit 1
}

$url = "http://localhost:$activePort/"
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  PORTFOLIO LOCAL ACTIF SUR : $url" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

Start-Process $url

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".png"   = "image/png"
    ".svg"   = "image/svg+xml"
    ".webp"  = "image/webp"
    ".ico"   = "image/x-icon"
    ".woff2" = "font/woff2"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq "/" -or $path -eq "") {
            $path = "/index.html"
        }

        $cleanPath = [System.Uri]::UnescapeDataString($path.TrimStart("/")).Replace("/", "\")
        $filePath = Join-Path $root $cleanPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $mime
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    } catch {
        # Continuer
    }
}
