import React from 'react';

import './LandingPage.css';

interface LandingPageProps {
  active: boolean;
}

export const LandingPage = ({ active }: LandingPageProps) => {
  return (
    <section id='landing-section'>
      <div className='landing-bg'></div>
      <div className='section1'>
        <div className='greetings'>Hello World, I'm</div>
        <div className='full-name-container'>
          <div className='full-name'>Theodore Andrew</div>
        </div>
      </div>
    </section>
  );
};
