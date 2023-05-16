import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Admin from "./components/Admin";
import ProductDetail from "./components/ProductDetail";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
        <Route path="/" element={<MainContainer />}></Route>
      </Routes>
    </div>
  );
};

export default App;
