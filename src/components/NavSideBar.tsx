import React, { useRef } from 'react';

import './NavSideBar.css';

interface NavSideBarProps {
  active: boolean;
  toggleActive: (isActive: boolean) => void;
}

export const NavSideBar = ({ active, toggleActive }: NavSideBarProps) => {
  const burDiv1Ref = useRef<HTMLDivElement | null>(null);
  const burDiv2Ref = useRef<HTMLDivElement | null>(null);
  const burDivLine1Ref = useRef<HTMLDivElement | null>(null);
  const burDivLine2Ref = useRef<HTMLDivElement | null>(null);

  const toggleLandingNav = () => {
    const burDiv1 = burDiv1Ref.current;
    const burDiv2 = burDiv2Ref.current;
    const burDivLine1 = burDivLine1Ref.current;
    const burDivLine2 = burDivLine2Ref.current;

    toggleActive(!active);

    if (burDiv1 && burDiv2 && burDivLine1 && burDivLine2) {
      burDiv1.style.transitionDelay = active ? '0.3s' : '0s';
      burDiv2.style.transitionDelay = active ? '0.3s' : '0s';
      burDivLine1.style.transitionDelay = !active ? '0.3s' : '0s';
      burDivLine2.style.transitionDelay = !active ? '0.3s' : '0s';
    }
  };

  return (
    <>
      <div
        className={`burger ${active ? 'active' : ''}`}
        onClick={toggleLandingNav}
      >
        <div className='line-1' ref={burDiv1Ref}>
          <div className='line-inner-1' ref={burDivLine1Ref}></div>
        </div>
        <div className='line-2' ref={burDiv2Ref}>
          <div className='line-inner-2' ref={burDivLine2Ref}></div>
        </div>
      </div>
      <nav
        className={`nav-landing-container ${
          active ? 'nav-landing-active' : ''
        }`}
      >
        <div className='menus'>
          <div className='nav-link'>
            <div className='item'>About</div>
          </div>
          <div className='nav-link'>
            <div className='item'>Experience</div>
          </div>
          <div className='nav-link'>
            <div className='item'>Contact</div>
          </div>
        </div>
      </nav>
    </>
  );
};
