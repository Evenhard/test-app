import { combineReducers } from 'redux';

import homeReducer from './home/homeReducer';
import productsListReducer from './productsList/productsListReducer';
import cartReducer from './cart/cartReducer';
import orderReducer from './order/orderReducer';

export default combineReducers({
  home: homeReducer,
  productsList: productsListReducer,
  cart: cartReducer,
  order: orderReducer
});
