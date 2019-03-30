import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Back extends Component {
  render() {
    return (
      <Link to="/">
        <span role="img" aria-label="back">
          🔙
        </span>
      </Link>
    )
  }
}

export default Back