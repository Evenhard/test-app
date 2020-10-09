import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Card from '../Card/Card';
import {COLORS, DIMENS, SPACING} from '../../styles';
import CartItemButton from './CartItemButton';

const propTypes = {
    cartItem: PropTypes.any.isRequired,
};

const defaultProps = {};

const CartItem = ({
  /**
   * cartItem to dispaly
   */
  cartItem,
}) => {
    if (cartItem === undefined) {
        return null;
    }

    return (
        <Card
            type="outline"
            style={styles.container}>
            <Image
                source={{uri: cartItem.product.image}}
                style={styles.imageStyle}
                resizeMode="contain"
            />
            <View style={styles.detail}>
                <Text ellipsizeMode="tail" numberOfLines={2}>
                    {cartItem.product.name}
                </Text>
                <View style={styles.priceContainer}>
                    <Text type="label" bold>{cartItem.quantity} x </Text>
                    <Text type="label" bold style={styles.price}>
                        {cartItem.product.price} руб.
                    </Text>
                </View>
            </View>
            <CartItemButton product={cartItem.product} />
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        width: DIMENS.common.WINDOW_WIDTH - 10,
        height: DIMENS.orderDetailImageHeight,
        flexDirection: 'row',
        marginBottom: 5,
    },
    imageStyle: {
        width: DIMENS.orderDetailImageWidth,
        marginVertical: 5,
    },
    detail: {
        padding: SPACING.small,
        flex: 1,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        color: COLORS.primaryColor,
    },
});

CartItem.propTypes = propTypes;

CartItem.defaultProps = defaultProps;

export default CartItem;
