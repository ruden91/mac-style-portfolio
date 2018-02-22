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
      <div>
        { currentTime.toLocaleTimeString() }
      </div>
    )
  }

  tick() {
    this.setState({
      currentTime: new Date()
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default Clock;