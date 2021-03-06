import React from 'react';

import './styles/guess-count.css';

import { connect } from 'react-redux';

function GuessCount(props) {
  const isPlural = props.guessCount !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';

  return (
    <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
    </h2>
  );
}

function mapStateToProps(state){
  return {
    guessCount: state.guesses.length
  };
}
export default connect(mapStateToProps)(GuessCount);
