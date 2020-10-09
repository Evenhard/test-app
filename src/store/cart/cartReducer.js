import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './cartActions';

const initialState = {
    cartList: [],
    counter: 0,
    totalCost: 0
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART: {
            let arCart = state.cartList;
            let isExist = false;

            arCart.forEach(cartItem => {
                if (cartItem.product.id === payload.id) {
                    isExist = true;
                    cartItem.quantity++;
                }
            });

            if (!isExist) {
                arCart.push({
                    product: payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                cartList: arCart,
                counter: ++state.counter,
                totalCost: state.totalCost + payload.price
            };
        }
        case REMOVE_FROM_CART: {
            let arCart = state.cartList;

            arCart.forEach(cartItem => {
                if (cartItem.product.id === payload.id) {
                    if (cartItem.quantity > 1) {
                        cartItem.quantity--;
                    } else {
                        arCart = arCart.filter(item => item !== cartItem)
                    }
                }
            });

            return {
                ...state,
                cartList: arCart,
                counter: --state.counter,
                totalCost: state.totalCost - payload.price
            };
        }
        case CLEAR_CART: {
            return {
                ...state,
                cartList: [],
                counter: 0,
                totalCost: 0
            };
        }

        default:
            return state;
    }
};
