import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";
import { cartReducer } from "./context/CartContext";
import { getTotals } from "./utils/format";
import { validate } from "./screens/Checkoutscreen";
import products from "./products";

beforeEach(() => {
  localStorage.clear();
  window.history.pushState({}, "", "/");
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});

describe("cartReducer", () => {
  const product = { id: 1, name: "Item", image: "", price: 10, countInStock: 3 };

  it("adds and merges items without exceeding stock", () => {
    let state = cartReducer([], { type: "ADD", product, qty: 2 });
    state = cartReducer(state, { type: "ADD", product, qty: 5 });
    expect(state).toHaveLength(1);
    expect(state[0].qty).toBe(3);
  });

  it("updates quantity within bounds and removes items", () => {
    let state = cartReducer([], { type: "ADD", product, qty: 1 });
    state = cartReducer(state, { type: "UPDATE_QTY", id: 1, qty: 0 });
    expect(state[0].qty).toBe(1);
    state = cartReducer(state, { type: "REMOVE", id: 1 });
    expect(state).toEqual([]);
  });
});

describe("getTotals", () => {
  it("charges shipping under the free-shipping threshold", () => {
    expect(getTotals([{ price: 20, qty: 2 }])).toEqual({
      subtotal: 40,
      shipping: 9.99,
      tax: 3.2,
      total: 53.19,
    });
  });

  it("gives free shipping at $100 or more", () => {
    expect(getTotals([{ price: 50, qty: 2 }]).shipping).toBe(0);
  });
});

describe("checkout validation", () => {
  it("flags missing fields and a bad email/zip", () => {
    const errors = validate({
      fullName: "Ann Lee",
      email: "nope",
      address: "",
      city: "Austin",
      state: "TX",
      zip: "12",
    });
    expect(Object.keys(errors).sort()).toEqual(["address", "email", "zip"]);
  });
});

it("filters products by search", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("Search products"), {
    target: { value: "smartwatch" },
  });
  expect(screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent)).toContain(
    products[7].name
  );
  expect(screen.queryByText(products[0].name)).not.toBeInTheDocument();
});

it("adds to cart, checks out and shows the confirmation", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[0]);
  expect(screen.getByRole("status")).toHaveTextContent("Added to your cart");
  expect(screen.getAllByLabelText("Cart, 1 items")).toHaveLength(2);

  fireEvent.click(screen.getAllByLabelText("Cart, 1 items")[0]);
  expect(screen.getByRole("heading", { name: /^Shopping cart/ })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Proceed to checkout/ }));
  const values = {
    "Full name": "Ann Lee",
    Email: "ann@example.com",
    "Street address": "1 Main St",
    City: "Austin",
    State: "TX",
    "ZIP code": "78701",
  };
  Object.entries(values).forEach(([label, value]) =>
    fireEvent.change(screen.getByLabelText(label), { target: { value } })
  );
  fireEvent.click(screen.getByRole("button", { name: /Place order/ }));

  expect(screen.getByRole("heading", { name: "Thank you, Ann!" })).toBeInTheDocument();
  expect(within(screen.getByRole("navigation")).queryByText("1")).not.toBeInTheDocument();
});

it("shows not found for an unknown product", () => {
  window.history.pushState({}, "", "/product/999");
  render(<App />);
  expect(screen.getByText("We couldn't find that product.")).toBeInTheDocument();
});

it("sorts products by price", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("Sort products"), { target: { value: "price-asc" } });
  const prices = screen
    .getAllByText(/^\$\d/, { selector: ".product-price" })
    .map((el) => Number(el.textContent.replace(/[$,]/g, "")));
  expect(prices).toEqual([...prices].sort((a, b) => a - b));
});

it("adjusts quantity with the stepper and undoes a removal in the cart", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[0]);
  fireEvent.click(screen.getAllByLabelText("Cart, 1 items")[0]);

  fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
  expect(screen.getAllByLabelText("Cart, 2 items")).toHaveLength(2);

  fireEvent.click(screen.getByRole("button", { name: /^Remove / }));
  expect(screen.getByRole("heading", { name: "Your cart is empty" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Undo" }));
  expect(screen.getAllByLabelText("Cart, 2 items")).toHaveLength(2);
});

it("focuses the first invalid checkout field", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[0]);
  fireEvent.click(screen.getAllByLabelText("Cart, 1 items")[0]);
  fireEvent.click(screen.getByRole("button", { name: /Proceed to checkout/ }));
  fireEvent.click(screen.getByRole("button", { name: /Place order/ }));
  expect(screen.getByLabelText("Full name")).toHaveFocus();
  expect(screen.getByText("Full name is required")).toBeInTheDocument();
});
