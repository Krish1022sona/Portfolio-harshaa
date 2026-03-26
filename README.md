# Portfolio Wind - Modern Portfolio Website
https://portfolio-cybv.vercel.app
A modern, fully responsive portfolio website built with Next.js, featuring dark/light mode, smooth animations, and comprehensive accessibility features.

## ✨ Features

### 🎨 UI/UX Improvements
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent storage
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Performance Optimized**: Lazy loading, code splitting, and efficient animations
- **Enhanced Animations**: Smooth micro-interactions and scroll-based animations
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and ARIA labels

### 🚀 Key Features
- Interactive particle background in hero section
- Smooth scroll navigation with active section indicator
- Scroll-to-top button
- Responsive bottom navigation bar
- Optimized performance with lazy loading
- Theme persistence across sessions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Styling**: Tailwind CSS 4.0 (Alpha)
- **Animations**: Framer Motion 12.23.0
- **Icons**: React Icons 5.5.0
- **Particles**: React TSParticles 2.12.2
- **Font**: Inter (Google Fonts)

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/portfolio_wind.git
cd portfolio_wind
npm install
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio_wind/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.js        # Root layout with theme provider
│   │   ├── page.js          # Main page
│   │   └── globals.css      # Global styles and CSS variables
│   ├── components/          # React components
│   │   ├── Hero.js          # Hero section with particles
│   │   ├── About.js         # About section
│   │   ├── Skills.js        # Skills showcase
│   │   ├── Projects.js      # Projects display
│   │   ├── Achievements.js  # Achievements section
│   │   ├── Experiences.js   # Work/Education experiences
│   │   ├── Contact.js       # Contact information
│   │   ├── ThemeToggle.js   # Dark/light mode toggle
│   │   ├── Navigation.js    # Bottom navigation bar
│   │   ├── ScrollToTop.js   # Scroll to top button
│   │   └── LazyImage.js     # Lazy loading image component
│   └── contexts/            # React contexts
│       └── ThemeContext.js  # Theme management context
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies

```

## 🎨 Customization

### Update Personal Information
1. Edit `src/components/Contact.js` to update contact details
2. Modify `src/components/About.js` for personal information
3. Update social media links in `src/components/Hero.js`

### Modify Theme Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --accent-cyan: #06b6d4;
  --accent-purple: #a855f7;
  /* ... more colors */
}
```

### Add/Remove Sections
1. Create new component in `src/components/`
2. Import and add to `src/app/page.js`
3. Add navigation item in `src/components/Navigation.js`

## ♿ Accessibility

This project follows WCAG 2.1 AA guidelines:
- Semantic HTML structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- High contrast ratios

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Lazy loading for images
- Code splitting with Next.js
- Optimized animations (60fps)
- Efficient particle rendering
- Theme persistence with localStorage

## 📄 Documentation

For detailed information about all improvements, see [IMPROVEMENTS.md](./IMPROVEMENTS.md)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio_wind/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Harsh Vardhan Pandey**
- GitHub: [@Harsh63870](https://github.com/Harsh63870)
- LinkedIn: [Harsh Vardhan Pandey](https://www.linkedin.com/in/harsh-vardhan-pandey-00b463280/)
- Email: harshvardhanpandey372@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [TSParticles](https://particles.js.org/) - Particle effects

---

Built with ❤️ using Next.js and Tailwind CSS
