import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button, Text} from '../../../components';
import {COLORS, DIMENS} from '../../../styles';

const propTypes = {
    totalCost: PropTypes.number.isRequired,
    onPress: PropTypes.func,
};

const defaultProps = {
    totalCost: 0,
};

const TotalCostContainer = ({totalCost, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  bold>
                {`Итого к оплате:\n${totalCost} руб.`}
            </Text>
            <Button title="Оформить заказ" onPress={onPress} style={styles.button}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: DIMENS.common.WINDOW_WIDTH,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        padding: 15,
        backgroundColor: COLORS.totalCost.background,
    },
    text: {
        color: COLORS.totalCost.color,
        fontSize: 16,
        width: DIMENS.common.WINDOW_WIDTH / 2 - 20,
    },
    button: {
        width: DIMENS.common.WINDOW_WIDTH / 2 - 20,
        borderRadius: 20
    },
});

TotalCostContainer.propTypes = propTypes;

TotalCostContainer.defaultProps = defaultProps;

export default TotalCostContainer;
