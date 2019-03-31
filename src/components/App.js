import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Workouts from './pages/Workouts'
import Workout from './pages/Workout'

class App extends Component {
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
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
