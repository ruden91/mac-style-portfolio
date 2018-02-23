import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date()
    }
  }

  render() {
    const { currentTime } = this.state;
    return (
      <span className="clock">
        { currentTime.toLocaleTimeString() }
      </span>
    )
  }
  // timer function
  tick() {
    this.setState({
      currentTime: new Date()
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // clear timer function
    clearInterval(this.timer);
  }
}

export default Clock;