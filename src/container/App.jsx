import React, { Component } from 'react';
import '../style/index.scss';

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
        <div className="screen__loading">
          <p className="loading">loading...</p> 
        </div>
      )
    } else {
      return (
        <div className="screen">
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