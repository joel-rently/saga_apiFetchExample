// src/App.js
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/configStore';
import SourceCode from './sourceCode';
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
const App = () => (
  <Provider store={store}>
    <SourceCode />
  </Provider>
);

export default App;
