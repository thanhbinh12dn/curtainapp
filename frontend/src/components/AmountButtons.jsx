import React from "react";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="flex items-center">
      <button className="p-2" onClick={decrease}>
        <i class="fa-solid fa-minus"></i>
      </button>
      <h5 className="text-2xl font-semibold">{amount}</h5>
      <button className="p-2" onClick={increase}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default AmountButtons;
