import React from 'react';
import {Button, GenericTemplate} from '../../components';
import CategoriesContainer from './containers/CategoriesContainer';
// import {DefaultApi, ApiClient} from '../../api';
// import DefaultApi from '../../api/api/DefaultApi';

const HomeScreen = () => {
  const OpenApiCitypizza = require('../../api/index');
  const api = new OpenApiCitypizza.DefaultApi();
  // const category = new OpenApiCitypizza.Category(); // {Client} client model
  const callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  };

  const foo = () => {
    const category = api.categoryBySlug('sushi', callback);
    console.log(category.data);

    // api.ping(1, callback);

    // const SVC = new OpenApiCitypizza.DefaultApi();
    // const MODEL = new OpenApiCitypizza.Banner();
    //
    // const category = SVC.categoryBySlug('sushi');
    // console.log(category);
    // const category = DefaultApi.categoryBySlug('sushi');
    // console.log(category);
  };

  return (
    <GenericTemplate scrollable={false}>
      <Button onPress={foo} title={'API'} />
      <CategoriesContainer />
    </GenericTemplate>
  );
};

export default HomeScreen;
