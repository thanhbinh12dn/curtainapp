import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_DETAIL_BEGIN,
  GET_PRODUCTS_DETAIL_SUCCESS,
  GET_PRODUCTS_DETAIL_ERROR,
  GET_STORED_FEATURED_PRODUCTS,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      products_loading: true,
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products_loading: false,
      products: action.payload,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }
  if (action.type === GET_PRODUCTS_DETAIL_BEGIN) {
    return {
      ...state,
      products_detail_loading: true,
      products_detail_error: false,
    };
  }
  if (action.type === GET_PRODUCTS_DETAIL_SUCCESS) {
    return {
      ...state,
      products_detail_loading: false,
      products_detail: action.payload,
    };
  }
  if (action.type === GET_PRODUCTS_DETAIL_ERROR) {
    return {
      ...state,
      products_detail_loading: false,
      products_detail_error: true,
    };
  }
  if (action.type === GET_STORED_FEATURED_PRODUCTS) {
    return {
      ...state,
      stored_featured_products: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
