import React, { Component } from 'react';

import Header from '../component/Header';

class MainLoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-login-form">
        <Header />
        <button onClick={this.handleShutOffButton}>종료</button>
      </div>
    )
  }
  handleShutOffButton(e) {
    console.log(localStorage)
    localStorage.clear();
    console.log(localStorage)
  }
};

export default MainLoginForm;