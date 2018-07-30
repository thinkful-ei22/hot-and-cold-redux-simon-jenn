import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import { connect } from 'react-redux';

function GuessSection(props) {
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
    </section>
  );
}


export default connect()(GuessSection);