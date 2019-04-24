import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmojiButton from './buttons/EmojiButton'
import './Countdown.css'

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.stopUpdating = false

    this.startTime = Number(new Date())
    this.duration = props.duration
    this.state = { remaining: props.duration }

    this.interval = setInterval(() => {
      let elapsed = Number(new Date()) - this.startTime
      elapsed = (elapsed - (elapsed % 1000)) / 1000

      if (!this.stopUpdating) {
        this.setState(() => ({
          remaining: this.duration - elapsed,
        }))

        if (elapsed >= this.duration) {
          props.finishRest()
        }
      }
    }, 100)
  }
  componentWillUnmount() {
    this.stopUpdating = true
    clearInterval(this.interval)
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
