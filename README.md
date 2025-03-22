# Modern SaaS Product Website

A beautiful, responsive landing page for a SaaS product built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern and clean design with magical aesthetic
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎯 Optimized for performance
- 🌐 SEO friendly
- 🎬 Interactive UI elements

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/    # React components
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/           # Static assets
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file:

```js
colors: {
  primary: '#a78bfa',
  secondary: '#4c1d95',
  background: '#f5f3ff',
  // ...
}
```

### Typography

Font families and sizes can be adjusted in the `tailwind.config.js` file:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'system-ui', 'sans-serif'],
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
