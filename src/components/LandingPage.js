import React from 'react';

import NavLanding from './landing/NavLanding';
import landingBg from '../images/landing-color2.jpeg';

import './LandingPage.css';

const LandingPage = () => {
  // const burgerRef = useRef(null);

  // const toggleLandingNav = () => {
  //   const isActive = burgerRef.current.classList.contains('active');
  //   const burgerElements = burgerRef.current.childNodes;

  //   for (let i = 0; i < burgerElements.length; i++) {
  //     if (i % 2 === 0) {
  //       burgerElements[i].style.transitionDelay = isActive ? '0.3s' : '0s';
  //     } else {
  //       burgerElements[i].style.transitionDelay = !isActive ? '0.3s' : '0s';
  //     }
  //   }

  //   burgerRef.current.classList.toggle('active');

  //   document
  //     .querySelector('.nav-landing-container')
  //     .classList.toggle('nav-landing-active');
  //   setTimeout(() => eachNavLinkAppear(), 400);
  // };

  // const eachNavLinkAppear = () => {
  //   const navImgLinks = [...document.querySelectorAll('.nav-img')];
  //   const navTxtLinks = [...document.querySelectorAll('.nav-text')];

  //   for (let i = 0; i < navImgLinks.length; i++) {
  //     navImgLinks[i].classList.toggle('nav-img-appear');
  //   }

  //   for (let i = 0; i < navTxtLinks.length; i++) {
  //     setTimeout(
  //       () => navTxtLinks[i].classList.toggle('nav-text-appear'),
  //       200 * (i + 1)
  //     );
  //   }
  // };

  return (
    <div className='landing-container'>
      <div className='landing-bg' src={landingBg} alt='Theodore Andrew'></div>

      {/* <div className='burger' ref={burgerRef} onClick={toggleLandingNav}>
        <div className='line-1'>
          <div className='line-inner-1'></div>
        </div>
        <div className='line-2'>
          <div className='line-inner-2'></div>
        </div>
      </div> */}
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

export default LandingPage;
