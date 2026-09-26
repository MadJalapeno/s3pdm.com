# S3PDM - 11ty + Tailwind CSS v4

A single page website built with 11ty and Tailwind CSS v4.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the development server with both 11ty and Tailwind watch:
```bash
npm start
```

The site will be available at `http://localhost:8080` and will automatically rebuild when you make changes.

Individual commands:
- `npm run dev:11ty` - Run 11ty dev server only
- `npm run dev:tw` - Run Tailwind CSS watch only

## Build

Build for production:
```bash
npm run build
```

Output will be in the `_site/` directory.

## Project Structure

```
src/
├── index.html              # Main page
├── _layouts/
│   └── base.njk            # Base layout template
├── _includes/              # Reusable components
├── assets/
│   ├── css/
│   │   └── tailwind.css    # Tailwind CSS entry point
│   └── images/             # Images and media
├── robots.txt
└── manifest.webmanifest
```

## Styling

This project uses Tailwind CSS v4 for styling. The CSS is compiled from `src/assets/css/tailwind.css` to `_site/assets/css/tailwind.css`.

To customize Tailwind, edit `tailwind.config.js`.
