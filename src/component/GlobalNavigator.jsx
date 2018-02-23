import React from 'react';
import '../style/component/_GlobalNavigator.scss';
const GlobalNavigator = () => (
  <nav className="global-navigator">
    <div className="global-navigator__content">
      <ul>
        <li>
          <i className="fab fa-instagram fa-2x"></i>
        </li>
        <li>
          <i className="fab fa-chrome fa-2x"></i>
        </li>
        <li>
          <i className="fab fa-slack fa-2x"></i>
        </li>
        <li>
          <i className="fab fa-telegram fa-2x"></i>
        </li>
        <li>
          <i className="fab fa-app-store-ios fa-2x"></i>
        </li>                                
      </ul>
    </div>
  </nav>
)

export default GlobalNavigator;