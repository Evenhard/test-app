import 'react-native-gesture-handler';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import RootNavigator from './navigation';
import store from './store';

const App = () => (
  <StoreProvider store={store}>
    <RootNavigator />
  </StoreProvider>
);

export default App;
