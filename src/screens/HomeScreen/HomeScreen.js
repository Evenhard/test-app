import React from 'react';
import {GenericTemplate} from '../../components';
import CategoriesContainer from './containers/CategoriesContainer';

const HomeScreen = () => {
    return (
        <GenericTemplate scrollable={false}>
            <CategoriesContainer/>
        </GenericTemplate>
    );
};

export default HomeScreen;
