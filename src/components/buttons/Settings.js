import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './Settings.css'

class Settings extends Component {
  render() {
    return (
      < Link to="/settings" className="Settings-btn" >
        <span role="img" aria-label="settings">
          🔧
        </span>
      </Link >
    )
  }
}

export default Settings