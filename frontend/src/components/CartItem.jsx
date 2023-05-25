import React from "react";

import { formatPrice } from "../utils/helpers";

const CartItem = ({ name, amount, image, price }) => {
  return (
    <div className="grid grid-cols-[216px_auto_auto] md:grid-cols-[363px_1fr_1fr_1fr_auto] justify-items-center place-items-center py-6 border-b-2">
      <div className="flex items-center">
        <img className="w-14 md:w-24 rounded-md mr-2" src={image} alt="" />
        <div className="text-xs md:text-base">
          <h5 className="font-semibold">{name}</h5>
          <h5 className="md:hidden text-[#f7923d]">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="hidden md:block text-[#f7923d]">{formatPrice(price)}</h5>
      <div className="flex items-center gap-2">
        <button>
          <i class="fa-solid fa-minus"></i>
        </button>
        <h2>1</h2>
        <button>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <h5 className="hidden md:block">{formatPrice(price * amount)}</h5>
      <button className="px-2 py-1 bg-[#dc3545] rounded-sm text-xs text-white">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
