import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import {resetGame, submitGuess} from './actions';

store.dispatch(submitGuess('77'));
console.log(store.getState());

store.dispatch(resetGame());
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
