import React, { Component } from 'react';

import Header from '../component/Header';
import GlobalNavigator from './GlobalNavigator';
class Wallpapers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <GlobalNavigator />
      </div>
    )
  }
}

export default Wallpapers;