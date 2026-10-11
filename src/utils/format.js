const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(amount) {
  return currency.format(amount);
}

// Order totals: free shipping over $100, flat 8% tax.
export const FREE_SHIPPING_THRESHOLD = 100;
export const SHIPPING_FEE = 9.99;
export const TAX_RATE = 0.08;

const round = (n) => Math.round(n * 100) / 100;

export function getTotals(items) {
  const subtotal = round(
    items.reduce((sum, item) => sum + item.price * item.qty, 0)
  );
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const tax = round(subtotal * TAX_RATE);
  const total = round(subtotal + shipping + tax);
  return { subtotal, shipping, tax, total };
}
