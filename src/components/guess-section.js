import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import { connect } from 'react-redux';

function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}

export default connect()(GuessSection);