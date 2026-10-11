# TopNotch Tech

A React storefront for electronics and accessories.

## Features

- Product catalog with search and category filter
- Product detail pages with stock status and quantity picker
- Shopping cart that persists in the browser (localStorage)
- Checkout form with validation, order summary (shipping + tax) and order confirmation
- Responsive layout with a mobile menu and always-visible cart icon

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # run tests
npm run build    # production build in /build
```

## Before going live

- **Replace the product data.** `src/products.js` contains demo listings copied from
  Amazon for third-party brands. Swap in your own products, descriptions and photos.
- **Add real payments.** Checkout currently saves the order in the browser only - no
  card is charged and nothing is sent to you. Connect a payment provider (e.g. Stripe
  Checkout) and an order backend; `src/utils/orders.js` is the place to swap in API calls.
- **Pricing rules** (free shipping threshold, shipping fee, tax rate) live in
  `src/utils/format.js`.

## Deployment

- **Netlify** (primary): https://magnificent-blini-b769ee.netlify.app
- **GitHub Pages** (backup): https://gluay88.github.io/topnotch-tech/ - publish
  with `npm run deploy:pages`, which builds the site and pushes it to the
  `gh-pages` branch. It does not update automatically, so rerun it after changes.

The build is a static single-page app. Hosts must serve `index.html` for unknown
paths so routes like `/product/3` work on refresh. `public/_redirects` handles this
on Netlify; on Vercel add a rewrite to `/index.html`.
