# Portfolio + Affiliate Website

A modern, responsive React portfolio website with an integrated affiliate products section.

## Features

- 🏠 **Home Page** - Beautiful hero section with introduction and call-to-action
- 👤 **About Page** - Personal information, skills, and values
- 💼 **Portfolio Page** - Showcase of projects and work
- 🛍️ **Affiliate Products Page** - Curated products with recommendations
- 📧 **Contact Page** - Contact form and social links

## Tech Stack

- React 19
- React Router DOM
- Vite
- Modern CSS with CSS Variables

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable components (Header, Footer)
├── pages/           # Page components (Home, About, Portfolio, etc.)
├── styles/          # Global styles
├── App.jsx          # Main app component with routing
└── main.jsx         # Entry point
```

## Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`): Update the hero section with your name and description
2. **About Page** (`src/pages/About.jsx`): Add your bio, skills, and values
3. **Contact Page** (`src/pages/Contact.jsx`): Update email and social media links

### Add Your Projects

Edit `src/pages/Portfolio.jsx` and update the `projects` array with your actual projects.

### Add Affiliate Products

Edit `src/pages/Affiliate.jsx` and update the `products` array with your affiliate products. Make sure to:
- Add your actual affiliate links
- Update product descriptions
- Add real product images (replace emojis)

### Styling

The project uses CSS variables defined in `src/index.css`. You can customize:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary brand color
- `--text-dark`: Dark text color
- `--text-light`: Light text color

## Notes

- Replace placeholder content with your actual information
- Add your affiliate links to the products
- Update social media links in Footer and Contact pages
- Consider adding a backend for the contact form or use a service like Formspree
- Add your actual project images and product images

## License

MIT
