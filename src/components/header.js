import React from 'react';

import TopNav from './top-nav';

import { connect } from 'react-redux';

import './styles/header.css';

function Header(props) {
  return (
    <header>
      <TopNav
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

export default connect()(Header);
