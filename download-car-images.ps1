# TANZARIDE - Car Image Download Script
# This script downloads high-quality car images from Unsplash API

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "TANZARIDE - Car Image Downloader" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create assets folder if it doesn't exist
$assetsPath = ".\assets"
if (!(Test-Path $assetsPath)) {
    New-Item -ItemType Directory -Path $assetsPath | Out-Null
    Write-Host "Created assets folder" -ForegroundColor Green
}

# Function to download image
function Download-CarImage {
    param (
        [string]$SearchTerm,
        [string]$FileName
    )
    
    try {
        Write-Host "Downloading: $FileName..." -ForegroundColor Yellow
        
        # Using Unsplash Source API (free, no API key required)
        $url = "https://source.unsplash.com/1200x800/?$SearchTerm"
        $outputPath = Join-Path $assetsPath $FileName
        
        Invoke-WebRequest -Uri $url -OutFile $outputPath -UseBasicParsing
        
        if (Test-Path $outputPath) {
            $fileSize = (Get-Item $outputPath).Length / 1KB
            $fileSizeRounded = [math]::Round($fileSize, 2)
            Write-Host "Downloaded: $FileName ($fileSizeRounded KB)" -ForegroundColor Green
            return $true
        }
    }
    catch {
        Write-Host "Failed to download: $FileName" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

Write-Host "Starting download of 9 car images..." -ForegroundColor Cyan
Write-Host ""

# Download images for each car
$downloads = @(
    @{Term="toyota,rav4,suv"; File="toyota-rav4-2020.jpg"},
    @{Term="honda,crv,crossover"; File="honda-crv-2019.jpg"},
    @{Term="toyota,hiace,van"; File="toyota-hiace-2021.jpg"},
    @{Term="nissan,xtrail,suv"; File="nissan-xtrail-2018.jpg"},
    @{Term="mazda,cx5,crossover"; File="mazda-cx5-2020.jpg"},
    @{Term="subaru,forester,suv"; File="subaru-forester-2019.jpg"},
    @{Term="mitsubishi,outlander,suv"; File="mitsubishi-outlander-2021.jpg"},
    @{Term="toyota,corolla,sedan"; File="toyota-corolla-2020.jpg"},
    @{Term="landcruiser,prado,4x4"; File="land-cruiser-prado-2019.jpg"}
)

$successCount = 0
$failCount = 0

foreach ($download in $downloads) {
    if (Download-CarImage -SearchTerm $download.Term -FileName $download.File) {
        $successCount++
    } else {
        $failCount++
    }
    Start-Sleep -Milliseconds 500  # Small delay between downloads
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Download Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Successful: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor Red
Write-Host ""
Write-Host "Images saved to: $assetsPath" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Check the downloaded images in the assets folder" -ForegroundColor White
Write-Host "2. Replace any images that do not match the car models" -ForegroundColor White
Write-Host "3. The HTML files are already updated to use these new images" -ForegroundColor White
Write-Host ""

