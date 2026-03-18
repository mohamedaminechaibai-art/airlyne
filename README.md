# Air Agency - Professional Travel Web Application

A modern, professional web application for an Air Agency built with React and Vite.

## Features

- ✈️ **Flight Search & Booking** - Search and compare flights with an intuitive interface
- 🌍 **Destinations** - Browse and explore amazing travel destinations worldwide
- 🎫 **Travel Services** - Comprehensive travel services including hotels, packages, visas, and more
- 📱 **Responsive Design** - Fully responsive design that works on all devices
- 🎨 **Modern UI** - Beautiful, modern interface with smooth animations
- ⚡ **Fast Performance** - Built with Vite for optimal performance

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern CSS with custom properties and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── FlightSearch.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Pages

- **Home** - Hero section, flight search, features, and popular destinations
- **Destinations** - Browse destinations by category with filtering
- **Services** - Comprehensive travel services overview
- **About** - Company information, values, and mission
- **Contact** - Contact form and information

## Customization

The application uses CSS custom properties for easy theming. Modify the variables in `src/index.css`:

```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00a8e8;
  --accent-color: #ff6b35;
  /* ... */
}
```

## License

This project is open source and available for use.

