import React from 'react';

import Battery from './Battery';
import Clock from '../container/Clock';
const Header = (props) => (
  <header>
    <div className="header__left-side">

    </div>
    <div className="header__right-side">
      <Battery />
      <Clock />
    </div>
  </header>
);

export default Header;