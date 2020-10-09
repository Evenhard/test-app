import React, {useEffect, useContext} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {loadCategories, loadHistory} from '../../../store/actions';
import {CategoryItem, LoadingView} from '../../../components';
import AsyncStorage from '@react-native-community/async-storage';

const CategoriesContainer = ({categories}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());

    AsyncStorage.getItem('history').then(json => JSON.parse(json)).then(items => {
      if (items !== null) {
        dispatch(loadHistory(items));
        // По идее такие вещи нужно делать в инит приложения в сплешскрине, но как есть
      }
    });
  }, []);

  const renderRow = ({item}) => <CategoryItem category={item} />;

  if (categories.length === 0) return (<LoadingView />);

  return (
      <FlatList
          data={categories}
          renderItem={renderRow}
          keyExtractor={(item) => String(item.id)}
      />
  );
};

CategoriesContainer.propTypes = {
  categories: PropTypes.array.isRequired,
};

CategoriesContainer.defaultProps = {
  categories: [],
};

const mapStateToProps = ({home}) => {
  const {categories} = home;
  return {
    categories,
  };
};

export default connect(mapStateToProps)(CategoriesContainer);
