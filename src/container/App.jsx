import React, { Component } from 'react';
import '../style/index.scss';

// component
import Header from '../component/Header';
import Footer from '../component/Footer';
import MainLoader from '../component/MainLoader';

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
        <MainLoader />
      )
    } else {
      return (
        <div className="screen">
          <Header title="헤더" />
          <Footer />
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
    }, 5000)
  }
}

export default App;