import React, { useState } from "react";
import axios from "axios";
import { products_url as url } from "../url/products_url";

const CreateFeaturedProducts = () => {
  const [values, setValues] = useState("");
  const handleCreateFeaturedProduct = (e) => {
    e.preventDefault();
    try {
      axios.post(`${url}/store`, values).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateFeaturedProduct}>
        <h1 className="font-semibold text-xl">Thêm sản phẩm nổi bật</h1>
        <div className="mt-6">
          <label htmlFor="name">Name</label>
          <input
            className="w-full py-1 border border-solid border-slate-400"
            type="text"
            id="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className="mt-6">
          <label htmlFor="description">Description</label>
          <input
            className="w-full py-1 border border-solid border-slate-400"
            type="text"
            id="description"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
        </div>

        <div className="mt-6">
          <label htmlFor="imgURL">imageURL</label>
          <input
            className="w-full py-1 border border-solid border-slate-400"
            type="text"
            id="imgURL"
            onChange={(e) => setValues({ ...values, imgURL: e.target.value })}
          />
        </div>
        <button type="submit" className="mt-5 px-3 py-2 bg-[#BFDBF7]">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default CreateFeaturedProducts;
