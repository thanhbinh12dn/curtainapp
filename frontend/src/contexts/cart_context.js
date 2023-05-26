import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  CHANGE_AMOUNT_CART_ITEM,
  COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  const changeAmount = (id, value) => {
    dispatch({ type: CHANGE_AMOUNT_CART_ITEM, payload: { id, value } });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, changeAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
