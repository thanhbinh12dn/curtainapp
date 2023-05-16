import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import ProductsProvider from "./contexts/products_context";

import "./index.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </Router>
);
