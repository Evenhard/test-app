import React, {useEffect, useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {loadProducts} from '../../../store/actions';
import {ProductItem, LoadingView} from '../../../components';

const ProductsContainer = ({products, isLoading, categoryId}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts(categoryId));
    }, []);

    const renderRow = ({item}) => <ProductItem product={item} />;

    if (products.length === 0 || isLoading) return (<LoadingView />);

    return (
        <FlatList
            data={products}
            numColumns={2}
            contentContainerStyle={styles.container}
            renderItem={renderRow}
            keyExtractor={(item) => String(item.id)}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

ProductsContainer.propTypes = {
    products: PropTypes.array.isRequired,
};

ProductsContainer.defaultProps = {
    products: [],
};

const mapStateToProps = ({productsList}) => {
    const {products, isLoading} = productsList;
    return {
        products,
        isLoading
    };
};

export default connect(mapStateToProps)(ProductsContainer);
