import React from 'react';

import Clock from '../container/Clock';
const Header = (props) => (
  <header>
    <div className="header__left-side">

    </div>
    <div className="header__right-side">
      <Clock />
    </div>
  </header>
);

export default Header;