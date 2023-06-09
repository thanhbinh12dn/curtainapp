import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { products_detail_url as url } from "../url/products_detail_url";
import AddToCart from "./AddToCart";

const ProductDetail = () => {
  const { id } = useParams();

  const { products_detail, fetchProductsDetail } = useProductsContext();

  const { description, imgURL } = products_detail;

  useEffect(() => {
    fetchProductsDetail(`${url}${id}`);
  }, [id]);

  return (
    <main className="pt-[128px] md:px-20 px-8">
      <Link className="inline-block px-2 py-0 bg-red-200 rounded-lg" to={"/"}>
        Quay lại
      </Link>
      <div className="mt-4 grid md:grid-cols-2">
        <div className="flex justify-center mb-5 md:mb-0">
          <img src={imgURL} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-3">{description}</h3>
          <h5 className="font-semibold text-lg text-[#ab7a5f] mb-3">
            170.000 VND
          </h5>
          <p className="mb-4">
            Rèm cửa sổ hiện đại có vô số kiểu dáng và màu sắc, để biến tấu nó
            thành bộ rèm cửa sổ xinh đẹp, hiện đại, Nói là rèm cửa sổ nhưng thực
            chất bộ rèm này có thể cho nhiều cánh cửa khác như là cửa đi, cửa
            ban công, cửa sổ, ... Để đồng bộ như vậy thì ngôi nhà của bạn đơn
            giản nhưng sang trọng hơn nhiều. Với rèm cửa cũng phụ thuộc trần
            nhà, tường nhà của bạn để lựa chọn kiểu may rèm phù hợp. Có những
            kiểu may đơn giản như là kiểu ore, kiểu xếp ly, kiểu nữ hoàng... Lựa
            chọn kiểu may rèm phù hợp với ngôi nhà bạn, thông thường chúng tôi
            sẽ đến khảo sát và tư vấn cho bạn, phần này bạn yên tâm với ánh mắt
            nhìn chuyên môn của chúng tôi.
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">Tình trạng:</span> Còn
            hàng
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">Brand:</span> MCHP
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">Model:</span>{" "}
            HPSL-19-01-1
          </p>
          <div className="my-3">
            <span className="p-2 bg-yellow-300 uppercase">
              Miễn phí vận chuyển
            </span>
            <span className="p-2 bg-yellow-300 uppercase mx-2">
              Miễn phí lắp đặt
            </span>
          </div>
          <div className="mt-2">
            <label>Kích thước: </label>
            <select
              name="dimension"
              className="p-2 border-2 border-solid border-slate-800"
            >
              <option value="1">100 x 270cm</option>
              <option value="2">150 x 270cm</option>
              <option value="3">200 x 270cm</option>
              <option value="4">250 x 270cm</option>
              <option value="5">300 x 270cm</option>
            </select>
          </div>

          <div className="mt-3">
            <AddToCart product={products_detail} />
          </div>
        </div>
      </div>
      <div>
        <h1>Mô tả sản phẩm</h1>
        <div>
          <p></p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
