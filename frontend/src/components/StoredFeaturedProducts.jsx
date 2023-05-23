import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { products_url as url } from "../url/products_url";
import { useProductsContext } from "../contexts/products_context";

const StoredFeaturedProducts = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState("");

  const {
    fetchStoredFeaturedProducts,
    stored_featured_products: featuredProducts,
  } = useProductsContext();

  useEffect(() => {
    fetchStoredFeaturedProducts(url);
  }, [reload]);

  const deleteFeaturedProduct = (id, e) => {
    console.log(id);
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setIsShowing(!isShowing);
    setReload(!reload);
  };

  const toggleModal = (e, id) => {
    e.preventDefault();
    setIsShowing(!isShowing);
    setId(id);
  };

  return (
    <>
      <div className="px-28 pt-16">
        <div>
          <h3 className="font-semibold text-2xl">Sản phẩm nổi bật</h3>
        </div>
        <div className="pt-4">
          <table>
            <thead>
              <tr>
                <th className="border border-solid border-slate-500">SL</th>
                <th className="border border-solid border-slate-500">
                  Hình ảnh
                </th>
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
                        href=""
                        className="bg-[#dc3545] p-2 rounded-md text-white cursor-pointer"
                        onClick={(e) => toggleModal(e, featuredProduct._id)}
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

      {/* Modal */}
      {isShowing ? (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)] max-h-full bg-gray-950 bg-opacity-75">
          <div className="relative left-1/2 -translate-x-1/2 max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={toggleModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Bạn có chắc chắn muốn xóa sản phẩm này không?
                </h3>
                <button
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  onClick={(e) => {
                    deleteFeaturedProduct(id, e);
                  }}
                >
                  Có, Chắc chắn
                </button>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Quay lại
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StoredFeaturedProducts;
