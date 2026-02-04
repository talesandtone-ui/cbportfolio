# Buildlabs - Premium Digital Marketing Agency Website

A modern, conversion-focused website for Buildlabs - a full-service digital marketing agency helping brands grow through video, websites, and performance marketing.

## 🚀 Features

- **Modern UI/UX**: Dark/light mode support with bold typography and cinematic visuals
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Conversion-Focused**: Optimized for lead generation with multiple CTAs
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Fast Performance**: Built with Vite and React for optimal loading speeds
- **Lead Generation**: Contact forms, WhatsApp integration, and consultation booking

## 📋 Pages

- **Home**: Hero section, services preview, stats, and strong CTAs
- **Services**: Comprehensive service listings (Creative, Web, Marketing, Growth)
- **Portfolio**: Case studies with before/after results and metrics
- **About**: Company story, mission, vision, values, and team
- **Pricing**: 3-tier pricing structure (Starter, Growth, Premium) with add-ons
- **Contact**: Lead generation form, contact methods, and consultation booking

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS & Autoprefixer**: CSS processing

## 📦 Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: { /* Your primary colors */ },
  dark: { /* Your dark mode colors */ }
}
```

### Content Updates
- **Homepage**: Edit `src/pages/Home.jsx`
- **Services**: Edit `src/pages/Services.jsx`
- **Portfolio**: Edit `src/pages/Portfolio.jsx` (add your case studies)
- **Pricing**: Edit `src/pages/Pricing.jsx`
- **About**: Edit `src/pages/About.jsx`
- **Contact**: Edit `src/pages/Contact.jsx` (update contact info and form handler)

### Contact Information
Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `index.html` (meta tags)

### Form Submission
The contact form currently logs to console. To connect to a backend:
1. Create an API endpoint
2. Update the `handleSubmit` function in `src/pages/Contact.jsx`
3. Add form validation and error handling

## 📱 Lead Generation Setup

### WhatsApp Integration
Update WhatsApp number in:
- `src/pages/Home.jsx` (CTA buttons)
- `src/pages/Contact.jsx` (contact methods)
- `src/components/Footer.jsx` (footer links)

### Consultation Booking
1. Set up a Calendly account (or similar)
2. Update the booking link in `src/pages/Contact.jsx`

### Google Form Integration
To use Google Forms instead of the contact form:
1. Create a Google Form
2. Replace the form in `src/pages/Contact.jsx` with an iframe or redirect

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms
The `dist` folder contains the production build that can be deployed to any static hosting service.

## 📊 SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (add when adding images)
- Structured data (add JSON-LD if needed)

## 🔧 Next Steps

1. **Add Real Content**
   - Replace placeholder case studies with real projects
   - Add actual client testimonials
   - Update team information

2. **Connect Backend**
   - Set up form submission endpoint
   - Add analytics (Google Analytics, etc.)
   - Implement email automation

3. **Add Images/Videos**
   - Add logo and brand assets
   - Include portfolio images/videos
   - Add team photos

4. **Legal Pages**
   - Create Privacy Policy page
   - Create Terms of Service page
   - Add cookie consent if needed

5. **Performance**
   - Optimize images
   - Add lazy loading
   - Implement code splitting

## 📝 License

This project is created for Buildlabs digital marketing agency.

## 📧 Contact

For questions or support:
- Email: hello@buildlabs.in
- Website: [Your domain]

---

**Built with ❤️ for Buildlabs**

