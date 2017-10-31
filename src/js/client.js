import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import calculatorReducers from './reducers/calculatorReducers';
import Home from './components/Home';

const middlewares = applyMiddleware(thunk)
const store = createStore(calculatorReducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
