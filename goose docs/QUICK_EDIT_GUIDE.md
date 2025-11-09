# Quick Gallery Edit Guide

## 🔄 Swap an Image (30 seconds)

### Step 1: Open index.html
Find the line with the image you want to replace:
```html
<img src="portfolio gallery/40-244A4811.jpg" alt="Community contribution 1" />
```

### Step 2: Replace with new image
Change the path to your new image:
```html
<img src="portfolio gallery/YOUR_NEW_IMAGE.jpg" alt="Community contribution 1" />
```

### Step 3: Update description (optional)
Change the overlay text:
```html
<div class="gallery-overlay">
    <p>Your New Description Here</p>
</div>
```

### Step 4: Save & Refresh
- Save the file (Ctrl+S / Cmd+S)
- Refresh your browser (F5 / Cmd+R)
- Done! ✓

---

## 📸 Available Images

Your `portfolio gallery` folder contains these images:

**Smaller images (good for thumbnails):**
- 40-244A4811.jpg
- 166-244A5668.jpg
- 245-244A6211.jpg
- 247-244A6232.jpg
- 248-244A6234.jpg
- 290-244A6562.jpg
- 374-244A7102.jpg
- 376-244A7115.jpg
- IMG_6275.jpeg
- IMG_6329.jpg
- IMG_6330.jpg
- IMG_6330 2.jpg
- IMG_6331 2.jpg
- cyc100devs.jpg

**Larger images (for featured slots):**
- DSC02344.JPG
- DSC02345.JPG
- DSC02347.JPG
- DSC02349.JPG
- DSC02351.JPG
- DSC02353.JPG
- IMG_5896.jpeg
- IMG_6013.jpeg

---

## 💬 Suggested Captions

Use these or create your own:

**Event/Speaking Related:**
- Speaking & Community Events
- Conference Presentation
- Panel Discussion
- Workshop Facilitation

**Advocacy/Education:**
- Developer Advocacy
- Tech Education
- Mentoring & Support
- Knowledge Sharing

**Community:**
- Community Leadership
- Building Networks
- Community Event
- Collaborative Moments

**Celebration:**
- Celebrating Success
- Team Moments
- Milestone Achievement
- Community Wins

---

## 🎯 Complete Gallery Item Template

Copy this template and customize:

```html
<div class="gallery-item fade-in-element">
    <img src="portfolio gallery/YOUR_IMAGE.jpg" alt="Brief description" />
    <div class="gallery-overlay">
        <p>Your Caption Here (2-4 words)</p>
    </div>
</div>
```

---

## ➕ Add a 9th Image

If you want more than 8 images, find the last gallery item:

```html
<div class="gallery-item fade-in-element">
    <img src="portfolio gallery/cyc100devs.jpg" alt="Community contribution 8" />
    <div class="gallery-overlay">
        <p>Celebrating Success</p>
    </div>
</div>
```

Add right after it:

```html
<div class="gallery-item fade-in-element">
    <img src="portfolio gallery/YOUR_NEW_IMAGE.jpg" alt="Community contribution 9" />
    <div class="gallery-overlay">
        <p>Your Description</p>
    </div>
</div>
```

The grid will automatically adjust! ✓

---

## 🚨 Common Issues & Fixes

**Image not showing?**
- Check the file path is correct (case-sensitive!)
- Make sure file exists in `portfolio gallery` folder
- Use forward slashes: `portfolio gallery/image.jpg` ✓
- Not backslashes: `portfolio gallery\image.jpg` ✗

**Text overlay not showing?**
- Make sure you're using the correct HTML structure
- Keep text short (2-4 words works best)
- Check for typos in `<div class="gallery-overlay">`

**Caption text too small on mobile?**
- This is normal and handled by responsive design
- Text scales automatically for smaller screens

**Animation not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check browser console for errors (F12)

---

## 🎨 CSS Properties You Can Tweak

If you want to fine-tune the gallery appearance, edit `style.css`:

**Gallery Item Size:**
```css
.gallery-item {
    height: 300px;  /* Change this number */
}
```

**Grid Columns (Desktop):**
```css
.gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /*                                             ↑ Change this */
}
```

**Hover Lift Amount:**
```css
.gallery-item:hover {
    transform: translateY(-8px);  /* Change -8px to -5px or -12px */
}
```

**Overlay Gradient:**
```css
.gallery-overlay {
    background: linear-gradient(to top, rgba(45, 81, 4, 0.95), /*...*/);
                                           ↑ Change these RGB values
}
```

---

## ✨ Best Practices

1. **Use consistent image dimensions** - Square (1:1) or similar ratios look best
2. **Optimize image size** - Compress images before uploading (keep under 500KB each)
3. **Keep captions short** - 2-4 words is ideal
4. **Rotate through images** - Update 1-2 images every month as you attend events
5. **Tell a story** - Arrange images to show your journey and growth

---

## 🆘 Need Help?

Refer to these files:
- **GALLERY_README.md** - Full customization guide
- **CHANGES_SUMMARY.md** - Overview of all updates
- HTML comments in `index.html` - Inline hints

---

Happy editing! 🚀
