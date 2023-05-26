import React from "react";
import { Link } from "react-router-dom";

import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../contexts/cart_context";
import CartItem from "./CartItem";

const CartContent = () => {
  const { cart, total_amount } = useCartContext();

  return (
    <div className="pt-24 px-8 md:px-24">
      <h1 className="font-semibold text-2xl mb-5">Giỏ hàng</h1>
      <div className="hidden md:block md:grid md:grid-cols-[360px_1fr_1fr_1fr_auto] justify-items-center pb-2 border-b-2 font-semibold">
        <h5>Sản phẩm</h5>
        <h5>Giá tiền</h5>
        <h5>Số lượng</h5>
        <h5>Tổng cộng</h5>
        <h5></h5>
      </div>

      {cart.map((item, index) => {
        return <CartItem key={index} {...item} />;
      })}

      <div className="float-right flex mt-5">
        <h5 className="mr-5">Tổng tất cả sản phẩm:</h5>
        <h5 className="text-[#f7923d]">{formatPrice(total_amount)}</h5>
      </div>

      <div className="mt-14 flex justify-between">
        <Link className="rounded-md text-white px-2 py-1 bg-[#B3C890]" to={"/"}>
          Tiếp tục xem
        </Link>
        <button className="rounded-md text-white px-2 py-0.5 bg-[#B3C890]">
          Xóa giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default CartContent;
