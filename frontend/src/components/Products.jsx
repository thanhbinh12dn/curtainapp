import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Products = ({ description, imgURL, slug }) => {
  return (
    <div className="flex flex-col justify-between shadow-md p-2 mb-2 mx-1 hover:-translate-y-px hover:shadow-xl">
      <div>
        <div className="w-full">
          <img className="w-full" src={imgURL} alt="featured1" />
        </div>
        <div className="text-sm md:text-base font-medium p-2">
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="px-2">
        <Link to={`/product-detail/${slug}`}>
          <button className="p-2 bg-black w-full text-white rounded-lg">
            Xem chi tiết
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
