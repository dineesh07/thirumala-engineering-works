# Thirumala Engineering Works - OEM Manufacturing Solutions

A premium, high-performance OEM manufacturing frontend website built to showcase capabilities, facilities, and streamline quote requests. Designed with a strong focus on mobile responsiveness, modern UI/UX aesthetics, and seamless navigation.

## 🚀 Features

- **Modern Tech Stack**: Scaffolded with Vite and React for lightning-fast HMR and optimized production builds.
- **Fully Responsive Layout**: Painstakingly refined for a seamless experience across desktop, tablet, and mobile devices down to 375px viewports.
- **Glassmorphism UI**: Beautiful, frosted-glass components, deep gradient buttons, and dynamic floating cards that provide a premium feel.
- **Dynamic Routing**: Built-in `react-router-dom` integration handling clean navigation between the Home landing page and the dedicated unified Contact page.
- **Smart Scrolling**: Implemented smooth anchor-link scrolling for in-page navigation (Capabilities, About Us, Facilities).
- **Interactive Quote System**: A streamlined, tab-based quotation form that adapts natively to both desktop multi-column and mobile single-column views.
- **Off-Canvas Mobile Menu**: A custom mobile drawer navigation with a sleek blur backdrop and active-state indicators.
- **Framer Motion Elements**: Utilizes `framer-motion` for buttery smooth programmatic scrolling (e.g., jumping between sections).

## 🛠️ Built With

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Pure CSS3 with custom variables, CSS Grid, Flexbox, and complex media queries.

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine (v16.0.0 or higher recommended).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dineesh07/thirumala-engineering-works.git
   cd thirumala-engineering-works
2. Install dependencies

bash
npm install
3. Start the development server

bash
npm run dev
The application will open locally at http://localhost:5173.

Building for Production
To generate an optimized, minified production build:

bash
npm run build
The compiled files will be output to the dist folder, ready for deployment to platforms like Netlify or Vercel.

📂 Project Structure
text
├── src/
│   ├── assets/           # Images, SVGs, and Social Icons
│   ├── components/       # Reusable UI sections (Navbar, Hero, QuoteSection, FAQSection, etc.)
│   ├── pages/            # Page-level components (Home, Contact)
│   ├── App.jsx           # Main application routing and entry point
│   ├── App.css           # Global styles and complex media queries
│   └── index.css         # CSS Reset and root variables
└── index.html            # HTML entry point

📱 Mobile Refinements Highlights
Significant effort was placed into standardizing the mobile experience:

Quote Form: Form inputs natively stretch across the container while secondary CTA cards cleanly drop below the form via CSS flex-ordering.
Contact Hub: Eliminated all double-padding voids and enforced a mathematical 16:9 aspect ratio on map integration to guarantee clean aesthetics on narrow viewports.
Subpixel Integrity: Hardened layout boundaries using box-shadow overlaps to prevent subpixel bleeding and gray-lines on chromium scaling (150% zooms).
