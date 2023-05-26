import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../contexts/cart_context";
import CartContent from "../components/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <div className="pt-24 px-8 md:px-24">
      <h1 className="font-semibold text-2xl mb-5">Giỏ hàng</h1>
      {cart.length < 1 ? (
        <div className="mt-24 md:mt-32 flex flex-col justify-center items-center gap-2">
          <h1 className="font-semibold text-xl md:text-2xl">
            Giỏ hàng của bạn đang trống
          </h1>
          <Link to={"/"} className="px-2 py-1 bg-red-400 rounded text-white">
            Xem sản phẩm
          </Link>
        </div>
      ) : (
        <CartContent />
      )}
    </div>
  );
};

export default CartPage;
