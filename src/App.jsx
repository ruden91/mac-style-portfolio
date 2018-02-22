import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoading: true
    }
  }

  render() {
    const { initialLoading } = this.state;

    if (initialLoading) {
      return (
        <div className="initial-loading">
          loading...
        </div>
      )
    } else {
      return (
        <div className="app">
          app start
        </div>
      )
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('loading 완료');

      this.setState({
        initialLoading: false
      })
    }, 3000)
  }
}

export default App;