import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';
import { connect } from 'react-redux';

function StatusSection(props) {
  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount/>
      <GuessList/>
      <AuralStatus />
    </section>
  );
}

export default connect()(StatusSection);
