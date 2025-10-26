# 🚀 TANZARIDE - Hostinger Business Hosting Deployment Guide

## Complete Guide to Upload Your Website to Hostinger

This guide is specifically tailored for **Hostinger Business Hosting** based on their official requirements and best practices.

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Hostinger File Structure Requirements](#hostinger-file-structure-requirements)
3. [Upload Methods](#upload-methods)
4. [Step-by-Step Deployment](#step-by-step-deployment)
5. [SSL Configuration](#ssl-configuration)
6. [Post-Deployment Testing](#post-deployment-testing)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Deployment Checklist

Before uploading to Hostinger, ensure you have:

- [ ] **Hostinger Business Hosting account** active
- [ ] **Domain name** registered and pointed to Hostinger nameservers
- [ ] **All website files** ready (HTML, CSS, JS, images)
- [ ] **SSL certificate** (free with Hostinger - auto-installed)
- [ ] **FTP credentials** (if using FTP method)
- [ ] **Backup** of all files (just in case)

---

## 📂 Hostinger File Structure Requirements

### **Critical: The `public_html` Folder**

Hostinger uses a specific directory structure:

```
/home/u12345678/                    ← Your account root
├── domains/
│   └── tanzaride.com/
│       └── public_html/            ← YOUR WEBSITE FILES GO HERE
│           ├── index.html          ← MUST be named index.html
│           ├── about.html
│           ├── cars.html
│           ├── gallery.html
│           ├── contact.html
│           ├── .htaccess           ← Configuration file
│           ├── robots.txt
│           ├── sitemap.xml
│           ├── assets/             ← All images and resources
│           │   ├── BMW 7 SERIES.jpeg
│           │   ├── TOYOTA HIACE.jpg
│           │   └── ... (all vehicle images)
│           ├── cars-data.js
│           ├── cars-loader.js
│           ├── gallery.js
│           ├── main.js
│           └── style.css
```

### **⚠️ IMPORTANT RULES:**

1. **ALL website files MUST be inside `public_html`**
2. **Main page MUST be named `index.html`** (not home.html or main.html)
3. **File names are case-sensitive** on Linux servers
4. **No spaces in file names** (use hyphens or underscores)
5. **`.htaccess` file must be in `public_html`** root

---

## 🔧 Upload Methods

Hostinger provides **3 main methods** to upload your website:

### **Method 1: File Manager (Recommended for Beginners)**
- ✅ No additional software needed
- ✅ Works in browser
- ✅ Easy drag-and-drop
- ⚠️ Upload limit: 256MB per file
- ⚠️ Slower for many files

### **Method 2: FTP/SFTP (Recommended for Large Sites)**
- ✅ No file size limit
- ✅ Faster for bulk uploads
- ✅ Can resume interrupted uploads
- ⚠️ Requires FTP client (FileZilla)

### **Method 3: Auto Importer**
- ✅ Quick for archived sites
- ✅ Supports .zip, .tar, .tar.gz
- ⚠️ Limit: 256MB archive size

---

## 📤 Step-by-Step Deployment

### **OPTION A: Using File Manager (Easiest)**

#### **Step 1: Access hPanel**
1. Go to https://hpanel.hostinger.com
2. Log in with your credentials
3. Select your domain (tanzaride.com)

#### **Step 2: Open File Manager**
1. In hPanel, go to **Files** → **File Manager**
2. You'll automatically be in the `public_html` folder
3. **Delete any default files** (index.html, default.html, etc.)

#### **Step 3: Upload Your Files**

**Option 3A: Upload Individual Files**
1. Click **Upload Files** button (top right)
2. Select all your website files
3. Wait for upload to complete
4. Verify all files are uploaded

**Option 3B: Upload as ZIP (Faster)**
1. On your computer, create a ZIP file of all website files:
   ```
   Tanzaride.zip
   ├── index.html
   ├── about.html
   ├── cars.html
   ├── gallery.html
   ├── contact.html
   ├── .htaccess
   ├── assets/ (folder with all images)
   ├── *.js files
   ├── style.css
   └── ... (all other files)
   ```

2. In File Manager, click **Upload Files**
3. Upload the `Tanzaride.zip` file
4. After upload completes, **right-click** on the ZIP file
5. Select **Extract**
6. Choose destination: `public_html`
7. Click **Extract**
8. **Delete the ZIP file** after extraction

#### **Step 4: Verify File Structure**
Make sure your `public_html` looks like this:
```
public_html/
├── index.html          ✅
├── about.html          ✅
├── cars.html           ✅
├── gallery.html        ✅
├── contact.html        ✅
├── .htaccess           ✅
├── assets/             ✅
│   └── (all images)
├── *.js files          ✅
└── style.css           ✅
```

**⚠️ COMMON MISTAKE TO AVOID:**
```
❌ WRONG:
public_html/
└── Tanzaride/          ← Extra folder!
    └── index.html

✅ CORRECT:
public_html/
└── index.html          ← Files directly in public_html
```

If you have an extra folder, **move all files up one level**.

---

### **OPTION B: Using FTP/SFTP (For Advanced Users)**

#### **Step 1: Get FTP Credentials**
1. In hPanel, go to **Files** → **FTP Accounts**
2. Note down:
   - **Hostname:** ftp.tanzaride.com (or IP address)
   - **Username:** u12345678 (your account username)
   - **Password:** (your FTP password)
   - **Port:** 21 (FTP) or 22 (SFTP - recommended)

#### **Step 2: Install FileZilla**
1. Download from: https://filezilla-project.org/
2. Install on your computer

#### **Step 3: Connect to Hostinger**
1. Open FileZilla
2. Enter credentials:
   - **Host:** sftp://ftp.tanzaride.com
   - **Username:** u12345678
   - **Password:** your-password
   - **Port:** 22
3. Click **Quickconnect**

#### **Step 4: Upload Files**
1. **Left panel:** Navigate to your local Tanzaride folder
2. **Right panel:** Navigate to `/domains/tanzaride.com/public_html`
3. **Delete** any default files in public_html
4. **Select all** your website files on the left
5. **Drag and drop** to the right panel
6. Wait for upload to complete

#### **Step 5: Set Permissions (if needed)**
1. Right-click on `.htaccess` file
2. Select **File Permissions**
3. Set to **644** (rw-r--r--)
4. For folders, set to **755** (rwxr-xr-x)

---

## 🔒 SSL Configuration

### **Step 1: Install Free SSL (Hostinger Auto-Installs)**
1. In hPanel, go to **Security** → **SSL**
2. Your domain should show **SSL Active** ✅
3. If not, click **Install SSL** (it's free!)

### **Step 2: Force HTTPS**

**Method A: Using hPanel (Easiest)**
1. Go to **Security** → **SSL**
2. Find **Force HTTPS** toggle
3. Turn it **ON** ✅

**Method B: Using .htaccess (Already Done)**
The `.htaccess` file we created already includes:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

This automatically redirects all HTTP traffic to HTTPS.

### **Step 3: Verify SSL**
1. Visit: `http://tanzaride.com` (without https)
2. It should automatically redirect to: `https://tanzaride.com` ✅
3. You should see a **padlock icon** 🔒 in the browser

---

## 🧪 Post-Deployment Testing

### **1. Check Homepage**
- [ ] Visit https://tanzaride.com
- [ ] Homepage loads correctly
- [ ] Logo displays
- [ ] Hero banner shows
- [ ] Featured vehicles display with images

### **2. Check All Pages**
- [ ] https://tanzaride.com/about.html
- [ ] https://tanzaride.com/cars.html
- [ ] https://tanzaride.com/gallery.html
- [ ] https://tanzaride.com/contact.html
- [ ] https://tanzaride.com/howitworks.html
- [ ] https://tanzaride.com/listcar.html
- [ ] https://tanzaride.com/privacy.html
- [ ] https://tanzaride.com/terms.html

### **3. Check Browse Cars Page**
- [ ] All 19 vehicles display
- [ ] Vehicle images load correctly
- [ ] Filter buttons work (Luxury, City Cars, Safari, etc.)
- [ ] Search functionality works
- [ ] "Book Now" buttons work
- [ ] "View Gallery" buttons work

### **4. Check Gallery Page**
- [ ] All vehicle images display
- [ ] Images organized by category
- [ ] Lightbox opens when clicking images
- [ ] Image navigation works (prev/next)
- [ ] Keyboard controls work (arrows, ESC)

### **5. Check Mobile Responsiveness**
- [ ] Test on mobile device or use browser dev tools (F12)
- [ ] Website adapts to small screens
- [ ] Navigation menu works
- [ ] Images resize properly

### **6. Check SSL/HTTPS**
- [ ] Padlock icon shows in browser
- [ ] No mixed content warnings
- [ ] HTTP automatically redirects to HTTPS

### **7. Check Performance**
- [ ] Page loads in < 3 seconds
- [ ] Images load quickly
- [ ] No broken links

### **8. Check Browser Console**
- [ ] Press F12 to open developer tools
- [ ] Go to **Console** tab
- [ ] No red errors
- [ ] No 404 errors for images or files

---

## 🔧 Troubleshooting

### **Problem 1: Website shows "Index of /" or directory listing**

**Cause:** No index.html file or wrong location

**Solution:**
1. Make sure `index.html` exists in `public_html`
2. File name must be exactly `index.html` (lowercase)
3. Check `.htaccess` has: `DirectoryIndex index.html`

---

### **Problem 2: Images not loading (broken image icons)**

**Cause:** Incorrect file paths or case sensitivity

**Solution:**
1. Check image file names match exactly (case-sensitive)
   - ✅ `assets/BMW 7 SERIES.jpeg`
   - ❌ `assets/bmw 7 series.jpeg`
2. Verify all images are in `public_html/assets/` folder
3. Check browser console (F12) for 404 errors
4. Clear browser cache (Ctrl+F5)

---

### **Problem 3: CSS not loading (website looks unstyled)**

**Cause:** CSS file path incorrect

**Solution:**
1. Verify `style.css` is in `public_html` root
2. Check HTML files have correct path:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Clear browser cache (Ctrl+F5)

---

### **Problem 4: JavaScript not working**

**Cause:** JS files not loaded or path incorrect

**Solution:**
1. Verify all `.js` files are in `public_html`
2. Check HTML files have correct paths:
   ```html
   <script src="cars-data.js"></script>
   <script src="cars-loader.js"></script>
   <script src="gallery.js"></script>
   <script src="main.js"></script>
   ```
3. Check browser console (F12) for errors

---

### **Problem 5: HTTP not redirecting to HTTPS**

**Cause:** SSL not configured or .htaccess not working

**Solution:**
1. Verify SSL is installed in hPanel
2. Check `.htaccess` file exists in `public_html`
3. Enable "Force HTTPS" in hPanel → Security → SSL
4. Clear browser cache
5. Test in incognito/private window

---

### **Problem 6: 403 Forbidden Error**

**Cause:** File permissions incorrect

**Solution:**
1. In File Manager, right-click on files
2. Select **Permissions**
3. Set files to **644**
4. Set folders to **755**

---

### **Problem 7: 404 Not Found for pages**

**Cause:** Files not uploaded or wrong location

**Solution:**
1. Verify all HTML files are in `public_html` root
2. Check file names are correct (case-sensitive)
3. Test direct URL: https://tanzaride.com/cars.html

---

### **Problem 8: Website works but shows old content**

**Cause:** Browser cache or CDN cache

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Test in incognito/private window
4. Wait 5-10 minutes for DNS propagation

---

## 📞 Hostinger Support

If you encounter issues:

1. **Live Chat:** Available 24/7 in hPanel
2. **Knowledge Base:** https://support.hostinger.com
3. **Tutorials:** https://www.hostinger.com/tutorials

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] All files uploaded to `public_html`
- [ ] `index.html` is in root of `public_html`
- [ ] All images in `assets/` folder
- [ ] `.htaccess` file uploaded
- [ ] SSL certificate active
- [ ] HTTPS forced (auto-redirect working)
- [ ] All pages accessible
- [ ] All images loading
- [ ] JavaScript working (filters, search, gallery)
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Tested in multiple browsers

---

## 🎉 Success!

Your Tanzaride website is now live on Hostinger!

**Your website:** https://tanzaride.com

---

*Last updated: 2025-10-26*  
*Optimized for: Hostinger Business Hosting*

