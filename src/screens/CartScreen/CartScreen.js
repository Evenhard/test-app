import React from 'react';
import {GenericTemplate} from '../../components';
import CartListContainer from './containers/CartListContainer';

const CartScreen = () => {
  return (
      <GenericTemplate scrollable={false}>
          <CartListContainer />
      </GenericTemplate>
  );
};

export default CartScreen;
