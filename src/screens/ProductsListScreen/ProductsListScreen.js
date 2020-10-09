import React from 'react';
import {GenericTemplate} from '../../components';
import ProductsContainer from './containers/ProductsContainer';

const ProductsListScreen = ({route}) => {
    return (
        <GenericTemplate scrollable={false}>
            <ProductsContainer categoryId={route.params.categoryId}/>
        </GenericTemplate>
    );
};

export default ProductsListScreen;
