import axios from "axios";
import { createContext, useEffect, useReducer, useContext } from "react";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../url/products_url";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFeaturedProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchFeaturedProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchFeaturedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
