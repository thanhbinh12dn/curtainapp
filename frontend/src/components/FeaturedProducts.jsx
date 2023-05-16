import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import queryString from "query-string";

import { useProductsContext } from "../contexts/products_context";

import Loading from "./Loading";
import Error from "./Error";
import Products from "./Products";
import Pagination from "./Pagination";

const FeaturedProducts = () => {
  const [featuredProductsPagination, setFeaturedProductsPagination] = useState(
    []
  );
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 2,
  });
  const [filters, setFilters] = useState({
    limit: 8,
    page: 1,
  });

  useEffect(() => {
    async function fetchFeaturedProductsPagination() {
      try {
        //Doan nay su dung thu vien query-string de bien doi obj filters thanh chuoi string limit=8&page=1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://localhost:1000/featured-products?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        setFeaturedProductsPagination(responseJSON);
        setPagination(filters);
      } catch (error) {
        console.log("Failed to fetch featured products: ", error.message);
      }
    }
    fetchFeaturedProductsPagination();
  }, [filters]);

  const featuredProductsLength = featuredProductsPagination.length;

  const { products_loading: loading, products_error: error } =
    useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handlePageChange = (newPage) => {
    console.log("newPage: ", newPage);
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  return (
    <main className="mb-32 px-8 md:px-24 py-4">
      <div className="mt-2 border-b-2 border-solid border-gray-500">
        <p className="text-xl font-semibold capitalize">Sản phẩm phổ biến</p>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featuredProductsPagination.map((item) => (
          <Products key={item._id} {...item} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange}
          featuredProductsLength={featuredProductsLength}
        />
      </div>
    </main>
  );
};

export default FeaturedProducts;
