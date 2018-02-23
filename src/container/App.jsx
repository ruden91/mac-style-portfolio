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
      initialLoading: true == localStorage.getItem('initialLoading')
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
          <div className="screen__blur"></div>
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

  componentWillMount() {
    if (localStorage.getItem('initialLoading') == null) {
      localStorage.setItem('initialLoading', true);
     this.setState({
      initialLoading: true
     }) 
    }
  }

  componentDidMount() {
    if (this.state.initialLoading) {
      setTimeout(() => {
        console.log('loading 완료');

        localStorage.setItem('initialLoading', false);
        this.setState({
          initialLoading: false
        })
      }, 5000)
    }
  }

  componentWillUnmount() {
    localStorage.clear();
  }
}

export default App;