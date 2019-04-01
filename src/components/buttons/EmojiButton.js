import React from 'react'

const SkipRest = props =>
  <button onClick={props.clickHandler}>
    <span role="img" aria-label="settings">{props.emoji}</span>
  </button>

export default SkipRest