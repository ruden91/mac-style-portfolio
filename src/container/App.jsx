import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../style/index.scss';

// component
import MainLoader from '../component/MainLoader';
import MainLoginForm from './MainLoginForm';
import Wallpapers from './Wallpapers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoading: false
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
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainLoginForm} />
              <Route path="/main" component={Wallpapers} />
            </Switch>
          </BrowserRouter>
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

  componentWillUnmount() {
  }
}

export default App;