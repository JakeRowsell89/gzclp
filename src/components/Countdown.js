import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmojiButton from './buttons/EmojiButton'
import './Countdown.css'

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: Number(new Date()),
      duration: props.duration,
      remaining: props.duration,
    }
    const interval = setInterval(() => {
      let elapsed = Number(new Date()) - this.state.startTime
      elapsed = (elapsed - (elapsed % 1000)) / 1000

      this.setState(state => ({
        remaining: state.duration - elapsed,
      }))

      if (elapsed >= this.state.duration) {
        props.finishRest()
        clearInterval(interval)
      }
    }, 100)
  }

  render() {
    return (
      <div>
        time remaining: {this.state.remaining} seconds
        <EmojiButton emoji="⏩" clickHandler={this.props.finishRest} />
      </div>
    )
  }
}

Countdown.propTypes = {
  duration: PropTypes.number,
  finishRest: PropTypes.func,
}

export default Countdown
