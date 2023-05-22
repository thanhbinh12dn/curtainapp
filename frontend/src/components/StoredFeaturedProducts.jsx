import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { products_url as url } from "../url/products_url";
import { useProductsContext } from "../contexts/products_context";

const StoredFeaturedProducts = () => {
  const {
    fetchStoredFeaturedProducts,
    stored_featured_products: featuredProducts,
  } = useProductsContext();

  useEffect(() => {
    fetchStoredFeaturedProducts(url);
  }, []);

  return (
    <div className="px-28 pt-16">
      <div>
        <h3 className="font-semibold text-2xl">Sản phẩm nổi bật</h3>
      </div>
      <div className="pt-4">
        <table>
          <thead>
            <tr>
              <th className="border border-solid border-slate-500">#</th>
              <th className="border border-solid border-slate-500">Hình ảnh</th>
              <th className="border border-solid border-slate-500">
                Tên sản phẩm
              </th>
              <th className="border border-solid border-slate-500">Mô tả</th>
              <th className="border border-solid border-slate-500"></th>
            </tr>
          </thead>
          <tbody>
            {featuredProducts.map((featuredProduct, index) => {
              return (
                <tr key={index}>
                  <td className="border border-solid border-slate-500 text-center">
                    {index + 1}
                  </td>
                  <td className="p-4 border border-solid border-slate-500">
                    <img
                      className="w-24 h-24"
                      src={featuredProduct.imgURL}
                      alt={featuredProduct.name}
                    />
                  </td>
                  <td className="border border-solid border-slate-500 px-2">
                    {featuredProduct.name}
                  </td>
                  <td className="border border-solid border-slate-500 px-2">
                    {featuredProduct.description}
                  </td>
                  <td className="border border-solid border-slate-500 p-2">
                    <Link
                      className="bg-[#0d6efd] mr-2 p-2 rounded-md text-white"
                      to={`/featured-products/${featuredProduct._id}/edit`}
                    >
                      Sửa
                    </Link>
                    <a
                      className="bg-[#dc3545] p-2 rounded-md text-white"
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
