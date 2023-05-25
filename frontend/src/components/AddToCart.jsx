import React, { useState } from "react";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";

import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const { addToCart } = useCartContext();
  const { _id, stock } = product;

  const increase = () => {
    setAmount((oldAmount) => {
      let currentAmount = oldAmount + 1;
      if (currentAmount > stock) {
        currentAmount = stock;
      }
      return currentAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let currentAmount = oldAmount - 1;
      if (currentAmount < 1) {
        currentAmount = 1;
      }
      return currentAmount;
    });
  };

  return (
    <div>
      <AmountButtons increase={increase} decrease={decrease} amount={amount} />
      <div className="mt-2">
        <Link
          to={"/cart"}
          className="py-1 px-2 bg-red-500 text-white rounded"
          onClick={() => addToCart(_id, amount, product)}
        >
          Lưu vào giỏ hàng
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
