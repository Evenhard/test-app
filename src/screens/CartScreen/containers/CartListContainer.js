import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {GenericTemplate, NoItems, CartItem} from '../../../components';
import TotalCostContainer from './TotalCostContainer';
import {NAVIGATION_TO_ORDER_SCREEN} from '../../../navigation/routes';

const CartListContainer = ({cartList, totalCost}) => {
    const navigation = useNavigation();

    const onItemPress = () => {
        navigation.navigate(NAVIGATION_TO_ORDER_SCREEN, {
            cartList,
            totalCost
        });
    };

    const renderRow = ({item}) => <CartItem cartItem={item}/>;

    if (cartList.length === 0) {
        return (<NoItems text={'Ваша корзина пуста...'}/>);
    }

    return (
        <GenericTemplate scrollable={false}>
            <FlatList
                data={cartList}
                renderItem={renderRow}
                contentContainerStyle={styles.container}
                keyExtractor={(item) => String(item.product.id)}
            />
            <TotalCostContainer
                totalCost={totalCost}
                onPress={onItemPress}
            />
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});

CartListContainer.propTypes = {
    cartList: PropTypes.array.isRequired,
};

CartListContainer.defaultProps = {
    cartList: [],
};

const mapStateToProps = ({cart}) => {
    const {cartList, totalCost} = cart;
    return {
        cartList,
        totalCost
    };
};

export default connect(mapStateToProps)(CartListContainer);
