import React, { useState } from 'react';

import { LandingPage } from './LandingPage';
import { NavSideBar } from './NavSideBar';
import './App.css';

export const App = () => {
  const [active, setActive] = useState(false);

  const toggleActive = function (isActive: boolean): void {
    setActive(isActive);
  };

  return (
    <div>
      <NavSideBar active={active} toggleActive={toggleActive} />
      <LandingPage active={active} />
    </div>
  );
};
