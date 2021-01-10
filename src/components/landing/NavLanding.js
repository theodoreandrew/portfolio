import React, { useRef, useState } from 'react';

import about from '../../images/about.jpeg';
import project from '../../images/project2.jpeg';
import resume from '../../images/resume.jpeg';
import './NavLanding.css';

const NavLanding = () => {
  const burRef = useRef(null);
  const burDiv1Ref = useRef(null);
  const burDiv2Ref = useRef(null);
  const burDivLine1Ref = useRef(null);
  const burDivLine2Ref = useRef(null);
  const [active, setActive] = useState(false);

  const toggleLandingNav = () => {
    const burDiv1 = burDiv1Ref.current;
    const burDiv2 = burDiv2Ref.current;
    const burDivLine1 = burDivLine1Ref.current;
    const burDivLine2 = burDivLine2Ref.current;

    setActive((prevState) => !prevState);
    burDiv1.style.transitionDelay = active ? '0.3s' : '0s';
    burDiv2.style.transitionDelay = active ? '0.3s' : '0s';
    burDivLine1.style.transitionDelay = !active ? '0.3s' : '0s';
    burDivLine2.style.transitionDelay = !active ? '0.3s' : '0s';

    document
      .querySelector('.nav-landing-container')
      .classList.toggle('nav-landing-active');
    setTimeout(() => eachNavLinkAppear(), 400);
  };

  const eachNavLinkAppear = () => {
    const navImgLinks = [...document.querySelectorAll('.nav-img')];
    const navTxtLinks = [...document.querySelectorAll('.nav-text')];

    for (let i = 0; i < navImgLinks.length; i++) {
      navImgLinks[i].classList.toggle('nav-img-appear');
    }

    for (let i = 0; i < navTxtLinks.length; i++) {
      setTimeout(
        () => navTxtLinks[i].classList.toggle('nav-text-appear'),
        200 * (i + 1)
      );
    }
  };

  return (
    <>
      <div
        className={`burger ${active ? 'active' : ''}`}
        onClick={toggleLandingNav}
        ref={burRef}
      >
        <div className='line-1' ref={burDiv1Ref}>
          <div className='line-inner-1' ref={burDivLine1Ref}></div>
        </div>
        <div className='line-2' ref={burDiv2Ref}>
          <div className='line-inner-2' ref={burDivLine2Ref}></div>
        </div>
      </div>
      <div className='nav-landing-container'>
        <div className='nav-landing-links'>
          <div className='links-inner'>
            <img src={about} className='nav-img' alt='about' />
            <div className='nav-text'>
              <span className='nav-name'>About</span>
            </div>
          </div>
        </div>
        <div className='nav-landing-links'>
          <div className='links-inner'>
            <img src={project} className='nav-img' alt='project' />
            <div className='nav-text'>
              <span className='nav-name'>Projects</span>
            </div>
          </div>
        </div>
        <div className='nav-landing-links resume-link'>
          <div className='links-inner'>
            <img src={resume} className='nav-img' alt='resume' />
            <div className='nav-text'>
              <span className='nav-name'>Resume</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLanding;
