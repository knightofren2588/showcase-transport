# Getting Started with Showcase Transport

## 🚀 Quick Start

Your project has been successfully set up with **Vite**, **React**, and **Tailwind CSS**!

### Start the Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:3000` and automatically open it in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
showcase-transport/
├── public/                  # Static assets
│   ├── images/              # Image files
│   └── icons/               # Icon files
├── src/                     # Source code
│   ├── components/          # Reusable React components
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Header.jsx       # Responsive navigation header
│   │   └── Footer.jsx       # Footer with links
│   ├── pages/               # Page components
│   │   └── HomePage.jsx     # Main landing page
│   ├── styles/              # Custom styles
│   │   └── index.css        # Additional Tailwind utilities
│   └── utils/               # Helper functions
│       └── helpers.js       # Utility functions
├── assets/                  # Project assets
│   └── logo/                # Logo files
├── index.html               # HTML entry point
├── main.js                  # JavaScript entry point
├── style.css                # Global styles with Tailwind directives
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind customization
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## 🎨 Features Included

### Responsive Layout Framework
- **Header Component**: Sticky navigation with mobile hamburger menu
- **Footer Component**: Multi-column footer with links and contact info
- **Layout Component**: Flexible wrapper with consistent spacing
- **HomePage**: Complete landing page with sections for:
  - Hero section with CTA
  - Services showcase (3-column grid)
  - About section
  - Contact form

### Tailwind Configuration
- Custom color palette (primary blue theme)
- Responsive breakpoints
- Custom utility classes in `src/styles/index.css`
- Mobile-first design approach

### Utility Functions
Located in `src/utils/helpers.js`:
- `formatDate()` - Date formatting
- `debounce()` - Function debouncing
- `scrollToElement()` - Smooth scrolling
- `isValidEmail()` - Email validation
- `generateId()` - Unique ID generation

## 🛠️ Customization Guide

### Changing Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors here
      },
    },
  },
}
```

### Adding New Pages
1. Create a new file in `src/pages/`
2. Import and use it in `src/App.jsx`

### Adding New Components
1. Create a new file in `src/components/`
2. Import and use it in your pages or other components

### Custom Styles
- **Global styles**: Edit `style.css`
- **Custom utilities**: Add to `src/styles/index.css`
- **Component styles**: Use Tailwind classes directly in JSX

## 📱 Responsive Breakpoints

Tailwind's default breakpoints are configured:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎯 Next Steps

1. **Add your logo**: Place logo files in `assets/logo/`
2. **Add images**: Place images in `public/images/`
3. **Customize content**: Edit `src/pages/HomePage.jsx`
4. **Add more pages**: Create new page components
5. **Style tweaks**: Modify colors and spacing in `tailwind.config.js`

## 🔧 Development Tips

- Hot Module Replacement (HMR) is enabled - changes appear instantly
- Use React DevTools browser extension for debugging
- Tailwind IntelliSense extension recommended for VS Code
- Check browser console for any warnings or errors

## 📦 Installed Packages

### Dependencies
- `react` - React library
- `react-dom` - React DOM bindings

### Dev Dependencies
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - PostCSS plugin for vendor prefixes
- `postcss` - CSS transformer

## 🎉 You're All Set!

Run `npm run dev` and start building your transportation showcase website!

