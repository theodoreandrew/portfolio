import React from "react";

import about from "../../images/about.jpeg";
import project from "../../images/project2.jpeg";
import resume from "../../images/resume.jpeg";
import "./NavLanding.css";

const NavLanding = () => {
  return (
    <div className="nav-landing-container">
      <div className="nav-landing-links">
        <div className="links-inner">
          <img src={about} className="nav-img" alt="about" />
          <div className="nav-text">
            <span className="nav-name">About</span>
          </div>
        </div>
      </div>
      <div className="nav-landing-links">
        <div className="links-inner">
          <img src={project} className="nav-img" alt="project" />
          <div className="nav-text">
            <span className="nav-name">Projects</span>
          </div>
        </div>
      </div>
      <div className="nav-landing-links resume-link">
        <div className="links-inner">
          <img src={resume} className="nav-img" alt="resume" />
          <div className="nav-text">
            <span className="nav-name">Resume</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLanding;
