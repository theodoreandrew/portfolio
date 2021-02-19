import React, { useState } from 'react';

import { Experience } from './Experience';
import { LandingPage } from './LandingPage';
import { NavSideBar } from './NavSideBar';
import './App.css';

export const App = () => {
  const [active, setActive] = useState(false);

  const toggleActive = function (isActive: boolean): void {
    setActive(isActive);
  };

  return (
    <div className={`container ${active ? 'container-active' : ''}`}>
      <NavSideBar active={active} toggleActive={toggleActive} />
      <LandingPage active={active} />
      <Experience />
    </div>
  );
};
