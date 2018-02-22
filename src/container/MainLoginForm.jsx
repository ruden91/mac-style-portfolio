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
      </div>
    )
  }
};

export default MainLoginForm;