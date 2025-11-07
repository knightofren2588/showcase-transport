# Showcase Transport

A modern, responsive transportation showcase website built with Vite, React, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast development and build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🎯 **Modern UI/UX** - Clean and professional design

## Project Structure

```
showcase-transport/
├── public/              # Static assets
│   ├── images/          # Image files
│   └── icons/           # Icon files
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── Layout.jsx   # Main layout wrapper
│   │   ├── Header.jsx   # Navigation header
│   │   └── Footer.jsx   # Footer component
│   ├── pages/           # Page components
│   │   └── HomePage.jsx # Home page
│   ├── styles/          # Additional styles
│   │   └── index.css    # Custom CSS utilities
│   └── utils/           # Utility functions
│       └── helpers.js   # Helper functions
├── assets/              # Project assets
│   └── logo/            # Logo files
├── index.html           # HTML entry point
├── main.js              # JavaScript entry point
├── style.css            # Global styles with Tailwind
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd showcase-transport
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Tailwind Configuration

The Tailwind configuration is located in `tailwind.config.js`. You can customize:
- Colors (primary palette is pre-configured)
- Fonts
- Breakpoints
- Spacing
- And more...

### Styling

- Global styles: `style.css`
- Custom utilities: `src/styles/index.css`
- Component styles: Use Tailwind utility classes in JSX

### Components

All components are located in `src/components/`:
- **Layout**: Main layout wrapper with header and footer
- **Header**: Responsive navigation with mobile menu
- **Footer**: Site footer with links and information

### Pages

Page components are in `src/pages/`:
- **HomePage**: Main landing page with sections for services, about, and contact

## Responsive Design

The site is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Responsive typography
- Touch-friendly interface elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contact

For questions or support, please contact mmg@showcasetransport.com or mag@showcasetransport.com

