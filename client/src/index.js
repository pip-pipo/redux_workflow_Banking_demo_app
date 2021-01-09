import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BankingReuducers} from './reducers/BankingDistructive'
import {createStore} from 'redux'
import {Provider} from 'react-redux'



const store = createStore(BankingReuducers)


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);




