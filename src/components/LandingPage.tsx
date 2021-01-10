import React from 'react';

import { NavLanding } from './landing/NavLanding';

import './LandingPage.css';

export const LandingPage = () => {
  return (
    <div className='landing-container'>
      <div className='landing-bg'></div>
      <NavLanding />

      <div className='welcome-msg'>
        <div className='welcome-container'>
          <h1 className='welcome-name'>
            Theodore
            <br /> Andrew
          </h1>
          <h3 className='role'>Frontend Engineer</h3>
          <p className='motto'>
            <em>
              <span className='hobby'>
                <i className='fas fa-laptop-code'></i> Enthusiast Coder{' '}
                <i className='fas fa-laptop-code'></i>
                <br />
                <i className='fas fa-table-tennis'></i> Table Tennis Player{' '}
                <i className='fas fa-table-tennis'></i>
                <br />
                <i className='fas fa-basketball-ball'></i> Ball for life{' '}
                <i className='fas fa-basketball-ball'></i>
              </span>
              <br />
              <br />
              <span className='qotd'>
                "The same everlasting God who cares for you today will take care
                of you tomorrow and every day. Either God will shield you from
                suffering or will give you unfailing strength to bear it. Be at
                peace then and put aside all anxious thoughts and imagination"
              </span>
            </em>
          </p>
          <div className='contact-me'>
            <div className='contact-container'>
              <div className='contact-links'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/theodore-andrew/'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </div>
              <div className='vertical-line'></div>
              <div className='contact-links'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.facebook.com/theodore.andrew'
                >
                  <i className='fab fa-facebook-square'></i>
                </a>
              </div>
              <div className='vertical-line'></div>
              <div className='contact-links'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/theodoreandrew'
                >
                  <i className='fab fa-github'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
