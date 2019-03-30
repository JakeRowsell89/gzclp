import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './Header.css';
import Settings from './buttons/Settings'
import Back from './buttons/Back'

import { PAGE_PATHS, PATHS } from '../constants'

class Header extends Component {
  render() {
    console.log('rendering header')
    return (
      <header className="App-header">
        <Route exact path={
          PAGE_PATHS.filter(path => path !== PATHS.home)
        } component={Back} />
        <Route exact path={
          PAGE_PATHS.filter(path => path !== PATHS.settings)
        } component={Settings} />
      </header>
    )
  }
}

export default Header