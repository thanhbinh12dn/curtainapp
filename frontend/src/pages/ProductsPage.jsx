import React from "react";
import Filter from "../components/Filter";

const ProductsPage = () => {
  return (
    <main className="pt-[128px] md:px-24">
      <div className="grid grid-cols-[200px_1fr] gap-x-14">
        <Filter />
        <div>abc</div>
      </div>
    </main>
  );
};

export default ProductsPage;
