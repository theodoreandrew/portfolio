import React, { useRef } from 'react';

import about from '../../images/about.jpeg';
import project from '../../images/project2.jpeg';
import resume from '../../images/resume.jpeg';
import './NavLanding.css';

const NavLanding = () => {
  const burgerRef = useRef(null);
  const navLandingContainerRef = useRef(null);

  const toggleLandingNav = () => {
    const isActive = burgerRef.current.classList.contains('active');
    const burgerElements = burgerRef.current.children;

    for (let i = 0; i < burgerElements.length; i++) {
      if (i % 2 === 0) {
        burgerElements[i].style.transitionDelay = isActive ? '0.3s' : '0s';
      } else {
        burgerElements[i].style.transitionDelay = !isActive ? '0.3s' : '0s';
      }
    }

    burgerRef.current.classList.toggle('active');
    navLandingContainerRef.current.classList.toggle('nav-landing-active');

    setTimeout(() => eachNavLinkAppear(), 400);
  };

  const eachNavLinkAppear = () => {
    const navLinksDum = [...navLandingContainerRef.current.children];
    const navImgDums = [];
    const navTxtDums = [];

    for (let i = 0; i < navLinksDum.length; i++) {
      navImgDums.push(navLinksDum[i].children[0]);
      navTxtDums.push(navLinksDum[i].children[1]);
    }

    for (let i = 0; i < navImgDums.length; i++) {
      navImgDums[i].classList.toggle('nav-img-appear');
    }

    for (let i = 0; i < navTxtDums.length; i++) {
      setTimeout(
        () => navTxtDums[i].classList.toggle('nav-text-appear'),
        200 * (i + 1)
      );
    }
  };

  return (
    <>
      <div className='burger' ref={burgerRef} onClick={toggleLandingNav}>
        <div className='line-1'>
          <div className='line-inner-1'></div>
        </div>
        <div className='line-2'>
          <div className='line-inner-2'></div>
        </div>
      </div>
      <div className='nav-landing-container' ref={navLandingContainerRef}>
        <div className='nav-landing-links'>
          <img src={about} className='nav-img' alt='about' />
          <div className='nav-text'>
            <span className='nav-name'>About</span>
          </div>
        </div>
        <div className='nav-landing-links'>
          <img src={project} className='nav-img' alt='project' />
          <div className='nav-text'>
            <span className='nav-name'>Projects</span>
          </div>
        </div>
        <div className='nav-landing-links resume-link'>
          <img src={resume} className='nav-img' alt='resume' />
          <div className='nav-text'>
            <span className='nav-name'>Resume</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLanding;
