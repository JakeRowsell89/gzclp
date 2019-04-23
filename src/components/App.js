import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Workouts from './pages/Workouts'
import Workout from './pages/Workout'
import Goals from './pages/Goals'
import History from './pages/History'

import store from '../lib/store'
import init from '../lib/initialize'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    init(store)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-page">
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/workouts" component={Workouts} />
            <Route path="/workout" component={Workout} />
            <Route path="/goals" component={Goals} />
            <Route path="/history" component={History} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
