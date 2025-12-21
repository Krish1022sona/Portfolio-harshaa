# Quick Start Guide - Portfolio Wind

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## ✨ What's New

### Dark/Light Mode Toggle
- Click the sun/moon icon in the top-right corner
- Theme preference is automatically saved
- Smooth transitions between themes

### Navigation
- Bottom navigation bar with icons
- Click any icon to jump to that section
- Active section is highlighted

### Scroll to Top
- Button appears after scrolling down
- Click to smoothly return to top

### Responsive Design
- Fully optimized for mobile, tablet, and desktop
- Touch-friendly buttons and navigation
- Adaptive layouts

---

## 🎨 Theme Customization

### Change Colors
Edit `src/app/globals.css`:

```css
:root {
  --accent-cyan: #06b6d4;      /* Change cyan accent */
  --accent-purple: #a855f7;    /* Change purple accent */
}
```

### Update Content
- **About**: `src/components/About.js`
- **Skills**: `src/components/Skills.js`
- **Projects**: `src/components/Projects.js`
- **Contact**: `src/components/Contact.js`

---

## 📱 Testing Responsiveness

### Chrome DevTools
1. Press `F12` to open DevTools
2. Click the device toolbar icon (or press `Ctrl+Shift+M`)
3. Test different device sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

### Browser Testing
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

---

## ♿ Accessibility Testing

### Keyboard Navigation
- Press `Tab` to navigate
- Press `Enter` to activate buttons
- All interactive elements are keyboard accessible

### Screen Reader
- Test with NVDA (Windows) or VoiceOver (Mac)
- All images have alt text
- All buttons have descriptive labels

### Focus Indicators
- Visible focus rings on all interactive elements
- Cyan color for focus states
- Consistent across all components

---

## 🚀 Performance Tips

### Build for Production
```bash
npm run build
npm start
```

### Optimize Images
- Use the `LazyImage` component for all images
- Compress images before adding to `public/` folder
- Use Next.js Image component for better optimization

### Check Performance
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run analysis for Performance, Accessibility, Best Practices, SEO

---

## 🐛 Common Issues

### Theme Not Persisting
- Clear browser cache
- Check localStorage in DevTools (Application tab)
- Ensure `ThemeProvider` wraps the app

### Animations Not Smooth
- Check if hardware acceleration is enabled
- Reduce particle count in `Hero.js`
- Disable animations for reduced motion preference

### Navigation Not Working
- Ensure all section IDs match navigation items
- Check browser console for errors
- Verify smooth scroll is enabled in CSS

---

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.js          # Main layout with providers
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills section
│   ├── Projects.js        # Projects section
│   ├── Achievements.js    # Achievements
│   ├── Experiences.js     # Work/Education
│   ├── Contact.js         # Contact info
│   ├── ThemeToggle.js     # Theme switcher
│   ├── Navigation.js      # Bottom nav
│   ├── ScrollToTop.js     # Scroll button
│   └── LazyImage.js       # Lazy loader
└── contexts/
    └── ThemeContext.js    # Theme state
```

---

## 🎯 Next Steps

### Add Your Content
1. Update personal information in components
2. Add your projects with descriptions
3. Update social media links
4. Add your resume PDF to `public/` folder

### Deploy
1. Push to GitHub
2. Connect to Vercel
3. Deploy with one click
4. Customize domain (optional)

### Enhance Further
- Add a contact form
- Implement blog section
- Add project filtering
- Integrate analytics
- Add SEO meta tags

---

## 📚 Documentation

- **Full Documentation**: [README.md](./README.md)
- **Improvements Guide**: [IMPROVEMENTS.md](./IMPROVEMENTS.md)
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## 💡 Tips

### Development
- Use `npm run dev` for development
- Check console for errors
- Use React DevTools for debugging

### Styling
- Use Tailwind utility classes
- Customize in `tailwind.config.js`
- Add custom CSS in `globals.css`

### Performance
- Run Lighthouse audits regularly
- Optimize images before adding
- Use lazy loading for images
- Minimize bundle size

---

## 🆘 Need Help?

- Check the documentation files
- Review the code comments
- Search for similar issues on GitHub
- Open an issue in the repository

---

**Happy Coding! 🎉**

