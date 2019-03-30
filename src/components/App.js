import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import Settings from './pages/Settings'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
