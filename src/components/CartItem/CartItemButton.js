import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../Button/Button';
import {addToCart, removeFromCart} from '../../store/cart/cartActions';
import PropTypes from 'prop-types';

const propTypes = {
    product: PropTypes.any.isRequired,
};

const defaultProps = {};

const CartItemButton = ({product}) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Button title='+' style={styles.plus} onPress={() => dispatch(addToCart(product))}/>
            <Button title='-' style={styles.minus} onPress={() => dispatch(removeFromCart(product))}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginRight: 10
    },
    plus: {
        width: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    minus: {
        width: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius:15,
    }
});

CartItemButton.propTypes = propTypes;

CartItemButton.defaultProps = defaultProps;

export default CartItemButton;
