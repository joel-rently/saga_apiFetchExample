/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/configStore';
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
