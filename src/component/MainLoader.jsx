import React from 'react';

const MainLoader = () => (
  <div className="screen__loading">
    <span className="screen__icon">
      <i className="fab fa-apple fa-6x"></i>
      <div id="progressbar">
        <span id="loading"></span>
      </div>      
    </span>
  </div>
);

export default MainLoader;