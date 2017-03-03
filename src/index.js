import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

console.log(chrome);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App chrome="chrome" />
  </Provider>
  , document.querySelector('.container'));
