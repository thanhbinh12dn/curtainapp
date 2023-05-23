import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { products_url as url } from "../url/products_url";

const EditFeaturedProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const componentDidMount = () => {
    try {
      axios.get(`${url}/${id}/edit`).then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setImgURL(response.data.imgURL);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFeaturedProduct = (e) => {
    e.preventDefault();
    try {
      axios
        .put(`${url}/${id}`, {
          name,
          description,
          imgURL,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/stored/featured-products");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <div className="px-28 pt-16">
      <Link to={"/stored/featured-products"}>
        <i class="fa-solid fa-angle-left"></i>
        <span className="ml-1">Quay lại</span>
      </Link>
      <h1 className="text-2xl font-semibold mb-3">Cập nhật sản phẩm nổi bật</h1>
      <form onSubmit={handleEditFeaturedProduct}>
        <div className="mb-4">
          <label htmlFor="">Name:</label>
          <input
            className="w-full border border-solid border-slate-300 p-1 rounded-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Description:</label>
          <textarea
            className="w-full border border-solid border-slate-300 p-1 rounded-md"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">ImgURL:</label>
          <input
            className="w-full border border-solid border-slate-300 p-1 rounded-md"
            type="text"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-5 bg-[#569DAA] text-white rounded-md hover:opacity-75"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default EditFeaturedProduct;
