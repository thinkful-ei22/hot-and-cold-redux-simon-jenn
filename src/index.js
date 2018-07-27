import React from 'react';
import ReactDOM from 'react-dom';

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
  <Game />,
  document.getElementById('root')
);
