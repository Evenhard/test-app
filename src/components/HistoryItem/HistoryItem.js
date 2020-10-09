import React, {useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Card from '../Card/Card';
import {COLORS, DIMENS, SPACING} from '../../styles';

const propTypes = {
    historyItem: PropTypes.any.isRequired,
};

const defaultProps = {};

const HistoryItem = ({
/**
* historyItem to dispaly
*/
historyItem,
}) => {
    if (historyItem === undefined) {
        return null;
    }

    return (
        <Card
            type="outline"
            style={styles.container}>
            <View style={styles.detail}>
                <View>
                    <Text>Товары в заказе:</Text>
                    {historyItem.cartList.map((item, index) =>
                        <Text ellipsizeMode="tail" numberOfLines={2} key={index}>
                            - {item.product.name}, {item.quantity} x {item.product.price} руб.
                        </Text>,
                    )}
                </View>
                <Text ellipsizeMode="tail" numberOfLines={2} style={styles.price}>
                    Итого: {historyItem.totalCost} руб.
                </Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        width: DIMENS.common.WINDOW_WIDTH - 10,
        minHeight: DIMENS.orderDetailImageHeight,
        flexDirection: 'row',
        marginBottom: 5,
    },
    imageStyle: {
        width: DIMENS.orderDetailImageWidth,
        marginVertical: 5,
    },
    detail: {
        padding: SPACING.medium,
        flex: 1,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        marginTop: 15,
        color: COLORS.primaryColor,
    },
});

HistoryItem.propTypes = propTypes;

HistoryItem.defaultProps = defaultProps;

export default HistoryItem;
