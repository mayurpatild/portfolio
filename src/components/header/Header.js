import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import { greeting, workExperiences, education } from "../../portfolio";


function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  const edu = education.viewEducations;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header": "header"}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {exp === true &&
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          }
          <li>
            <a href="#opensource">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          { edu === true &&
             <li>
               <a href="#education">Education</a>
             </li>
          }
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a><ToggleSwitch /></a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
