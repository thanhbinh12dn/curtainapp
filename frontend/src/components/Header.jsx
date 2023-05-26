import React, { useState } from "react";
import { Link } from "react-router-dom";

import LOGO from "../img/logo2.png";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import { useCartContext } from "../contexts/cart_context";

const Header = () => {
  const [menuBar, setMenuBar] = useState(true);
  const { total_items } = useCartContext();

  return (
    <header className="fixed left-0 top-0 right-0 bg-white z-10">
      {/* pc and tablet */}
      <div className="hidden lg:flex items-center justify-between px-20">
        <div className="w-24">
          <Link to="/">
            <img className="w-full" src={LOGO} alt="logo" />
          </Link>
        </div>
        <ul className="flex items-center uppercase font-semibold">
          <li className="p-4 hover:bg-slate-50 cursor-pointer">Rèm gia đình</li>
          <li className="p-4 hover:bg-slate-50 cursor-pointer">
            Rèm văn phòng
          </li>
          <li className="p-4 hover:bg-slate-50 cursor-pointer">Rèm tự động</li>
          <li className="p-4 hover:bg-slate-50 cursor-pointer">
            Rèm chuyên dụng
          </li>
          <li className="p-4 hover:bg-slate-50 cursor-pointer">Phụ kiện rèm</li>
          <li className="p-4 hover:bg-slate-50 cursor-pointer">
            Sản phẩm khác
          </li>
        </ul>

        <Link className="px-1" to={"/cart"}>
          <span className="text-xl relative">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-3 left-3.5 text-white rounded-full py-1 px-2 text-xs bg-red-200">
              {total_items}
            </span>
          </span>
        </Link>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex items-center justify-center px-20">
        {menuBar && (
          <IoMenu
            onClick={() => setMenuBar(false)}
            className="fixed top-8 left-5 text-3xl"
          />
        )}
        <div className="w-24">
          <Link to="/">
            <img className="w-full" src={LOGO} alt="logo" />
          </Link>
        </div>

        <Link className="px-1 fixed right-6" to={"/cart"}>
          <span className="text-xl relative">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-3 left-3.5 text-white rounded-full py-1 px-2 text-xs bg-red-200">
              {total_items}
            </span>
          </span>
        </Link>

        {!menuBar && (
          <div className="lg:hidden fixed top-0 left-0 right-28 md:right-96 bottom-0 bg-black z-10">
            <ul className="flex flex-col uppercase font-semibold text-white">
              <li className="p-4 hover:bg-slate-50 hover:text-black cursor-pointer">
                Rèm gia đình
              </li>
              <li className="p-4 hover:bg-slate-50 hover:text-black cursor-pointer">
                Rèm văn phòng
              </li>
              <li className="p-4 hover:bg-slate-50 hover:text-black cursor-pointer">
                Rèm tự động
              </li>
              <li className="p-4 hover:bg-slate-50 hover:text-black cursor-pointer">
                Rèm chuyên dụng
              </li>
              <li className="p-4 hover:bg-slate-50 hover:text-black cursor-pointer">
                Phụ kiện rèm
              </li>
              <li className="p-4 hover:bg-slate-50 hover:text-black cursor-pointer">
                Sản phẩm khác
              </li>
            </ul>

            <MdClose
              className="absolute top-2 right-3 text-gray-500 hover:text-[#ab7a5f] text-3xl cursor-pointer"
              onClick={() => setMenuBar(!menuBar)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
