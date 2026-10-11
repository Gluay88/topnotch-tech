// Orders are kept in the browser only. Swap these two functions for API calls
// once there is a backend / payment provider.
const STORAGE_KEY = "topnotch-orders";

function loadOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  const id = `TN-${Date.now().toString(36).toUpperCase()}`;
  const saved = { ...order, id, createdAt: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([saved, ...loadOrders()].slice(0, 20)));
  } catch {
    // Ignore storage failures; the confirmation page falls back gracefully.
  }
  return saved;
}

export function getOrder(id) {
  return loadOrders().find((order) => order.id === id);
}
