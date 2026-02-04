# Quick Start Guide - Buildlabs Website

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Visit `http://localhost:3000`

That's it! Your website is now running locally.

---

## 📝 Important Customization Steps

### Update Contact Information
1. **Email**: Search for `hello@buildlabs.in` and replace with your email
2. **Phone**: Search for `+91 98765 43210` and replace with your number
3. **WhatsApp**: Update WhatsApp links (search for `wa.me/919876543210`)

### Connect Contact Form
The contact form currently logs to console. To make it work:

**Option 1: Use a Form Service**
- Set up Formspree, Netlify Forms, or similar
- Update the form action in `src/pages/Contact.jsx`

**Option 2: Connect to Your Backend**
- Create an API endpoint
- Update `handleSubmit` function in `src/pages/Contact.jsx`

### Add Your Content
1. **Portfolio**: Replace case studies in `src/pages/Portfolio.jsx` with real projects
2. **About**: Update company story in `src/pages/About.jsx`
3. **Services**: Customize service descriptions in `src/pages/Services.jsx`
4. **Pricing**: Adjust pricing in `src/pages/Pricing.jsx`

### Add Images & Videos
1. Create a `public/images` folder
2. Add your logo, portfolio images, team photos
3. Update image paths in components

### Set Up Analytics
1. Get Google Analytics tracking ID
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🎨 Brand Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    // Your brand colors
  }
}
```

### Fonts
Fonts are loaded from Google Fonts in `index.html`. Change if needed.

---

## 📦 Build for Production

```bash
npm run build
```

The `dist` folder contains your production-ready website.

---

## 🚀 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build: `npm run build`
4. Publish: `dist`

---

## ✅ Pre-Launch Checklist

- [ ] Update all contact information
- [ ] Replace placeholder content with real content
- [ ] Add real portfolio case studies
- [ ] Connect contact form to backend/service
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Update social media links
- [ ] Add favicon
- [ ] Test form submissions
- [ ] Set up email notifications for form submissions

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review component files for customization options
- All pages are in `src/pages/`
- Components are in `src/components/`

---

**Happy Building! 🎉**

