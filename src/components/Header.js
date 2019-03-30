import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './Header.css';
import Settings from './buttons/Settings'
import Back from './buttons/Back'

class Header extends Component {
  render() {
    console.log('rendering header')
    return (
      <header className="App-header">
        <Route exact path="/settings" component={Back} />

        <Route exact path="/" component={Settings} />
      </header>
    )
  }
}

export default Header