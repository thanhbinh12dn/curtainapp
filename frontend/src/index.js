import React from "react";
import { createRoot } from "react-dom/client";

import ProductsProvider from "./contexts/products_context";
import CartProvider from "./contexts/cart_context";

import "./index.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);
