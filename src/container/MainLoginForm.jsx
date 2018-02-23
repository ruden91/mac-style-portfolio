import React, { Component } from 'react';

import Header from '../component/Header';
import { Link } from 'react-router-dom';
class MainLoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-login-form">
        <Header />
        <div className="main-login-form__center-content">
          <span className="main-login-form__avatar">
            <img src="http://lofrev.net/wp-content/photos/2017/03/dva_pink_logo.png" />
          </span>
          <p>userName</p>
          <Link className="main-login-form__submit-button" to="/main"></Link>
          <input type="text" placeholder="Enter Password"/>
        </div>
      </div>
    )
  }
};

export default MainLoginForm;