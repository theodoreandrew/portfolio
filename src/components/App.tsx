import React from 'react';

import { LandingPage } from './LandingPage';
import { NavSideBar } from './NavSideBar';
import './App.css';

export const App = () => {
  return (
    <div>
      <NavSideBar />
      <LandingPage />
    </div>
  );
};
