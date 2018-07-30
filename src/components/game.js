import React from 'react';
import store from '../store';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { connect } from 'react-redux';

function Game(props) {
  document.title = props.feedback ? `${props.feedback} | Hot or Cold` : 'Hot or Cold';
  
  return (
    <div>
      <Header
      />
      <main role="main">
        <GuessSection
        />
        <StatusSection  
        />
        <InfoSection />
      </main>
    </div>
  );
}
function mapStateToProps(state){
  return {
    feedback: state.feedback
  };
}
export default connect(mapStateToProps)(Game);