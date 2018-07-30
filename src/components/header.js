import React from 'react';

import TopNav from './top-nav';

import { connect } from 'react-redux';

import './header.css';

function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

export default connect()(Header);
