# Paradise Nursery Shopping

Paradise Nursery Shopping is a React-based plant store application built with Vite and Redux Toolkit. The project presents a landing page for the nursery, a categorized product catalog, and a shopping cart flow where users can add plants, update quantities, and review the total cost of their order.

## Project Details

- Project name: Paradise Nursery Shopping
- Folder: `PracticeReact/FinalProject/e-plantShopping`
- Package name: `shoppingcart`
- Purpose: demonstrate a small e-commerce experience for browsing and selecting houseplants
- Tech stack: React, Vite, Redux Toolkit, React Redux, ESLint

## Features

- Landing page with a nursery introduction and call-to-action
- About Us section describing the Paradise Nursery brand
- Product catalog grouped into plant categories such as air purifying, aromatic, medicinal, and low maintenance plants
- Shopping cart state managed with Redux Toolkit
- Add-to-cart behavior that increases quantity when the same plant is selected again
- Cart view with quantity controls, item removal, and total cart amount calculation
- Continue Shopping flow to return from the cart to the product listing

## Current Limitation

The checkout button is currently a placeholder and only shows an alert message. A real checkout process has not been implemented yet.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build the project for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx`: controls the landing page and product page flow
- `src/AboutUs.jsx`: contains the nursery introduction content
- `src/ProductList.jsx`: renders plant categories and product cards
- `src/CartItem.jsx`: displays cart items, totals, and quantity controls
- `src/CartSlice.jsx`: defines Redux cart actions and state updates
- `src/store.js`: configures the Redux store

## Summary

This project is a simple front-end shopping experience for a plant nursery. It is useful as a practice project for React component structure, state transitions between views, and Redux-based cart management.