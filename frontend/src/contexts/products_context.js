import axios from "axios";
import { useEffect, createContext, useReducer, useContext } from "react";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_DETAIL_BEGIN,
  GET_PRODUCTS_DETAIL_SUCCESS,
  GET_PRODUCTS_DETAIL_ERROR,
  GET_STORED_FEATURED_PRODUCTS,
} from "../actions";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../url/products_url";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  products_detail_loading: false,
  products_detail_error: false,
  products_detail: [],
  stored_featured_products: [],
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

  const fetchProductsDetail = async (url) => {
    dispatch({ type: GET_PRODUCTS_DETAIL_BEGIN });
    try {
      const response = await axios.get(url);
      const productsDetail = response.data;
      dispatch({ type: GET_PRODUCTS_DETAIL_SUCCESS, payload: productsDetail });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_DETAIL_ERROR });
    }
  };

  const fetchStoredFeaturedProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_STORED_FEATURED_PRODUCTS, payload: products });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeaturedProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, fetchProductsDetail, fetchStoredFeaturedProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
