import {LOAD_PRODUCTS, PUT_PRODUCTS} from './productsListActions';

const initialState = {
  products: [],
  isLoading: false
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case PUT_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false
      };
    case LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
