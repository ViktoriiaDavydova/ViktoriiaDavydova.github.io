import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className="nav-menu active">
          <div className="nav-menu-items">
            <div className="navbar-toggle">
              <img
                className="aboutMeImg"
                src={require("../images/aboutMeImg.jpg")}
                alt="Some nature"
              />
              <div className="frames">
                <div> VIKTORIIA DAVYDOVA </div>
                <div>Front-End Web Developer</div>
              </div>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
