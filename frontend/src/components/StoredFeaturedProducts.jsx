import React from "react";

import { useProductsContext } from "../contexts/products_context";

const StoredFeaturedProducts = () => {
  const { products: featuredProducts } = useProductsContext();
  console.log(featuredProducts);

  return (
    <div className="px-28 pt-16">
      <div>
        <h3>Sản phẩm nổi bật</h3>
      </div>
      <div className="pt-4">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {featuredProducts.map((featuredProduct, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="p-4">
                    <img
                      className="w-24 h-24"
                      src={featuredProduct.imgURL}
                      alt={featuredProduct.name}
                    />
                  </td>
                  <td>{featuredProduct.name}</td>
                  <td>{featuredProduct.description}</td>
                  <td>
                    <a
                      className="bg-[#0d6efd] mr-2 p-2 rounded-md text-white"
                      href="#"
                    >
                      Sửa
                    </a>
                    <a
                      className="bg-[#dc3545] mr-2 p-2 rounded-md text-white"
                      href="#"
                    >
                      Xóa
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoredFeaturedProducts;
