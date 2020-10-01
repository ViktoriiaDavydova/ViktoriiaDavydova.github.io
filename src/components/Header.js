import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { Router, Switch, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="header">
            <div className="frames">
              <div style={{ fontSize: "35px" }}> VIKTORIIA DAVYDOVA </div>
              <div style={{ fontSize: "30px" }}>Front End Web Developer</div>
            </div>
          </header>
        </div>
        <div>
          {/* <div >
            <NavLink to="/" >
              <div >About Me</div>
            </NavLink>
          </div> */}

          <div>
            <NavLink to="/">
              <div className="tab button ">
                <button className="bannertext">
                  About me
                  <img src={require("../images/myQuestion.png")} />
                </button>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/Projects">
              <div className="tab button">
                <button className="bannertext">
                  Projects
                  <img src={require("../images/myBulb.png")} />
                </button>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/Resume">
              <div className="tab button">
                <button className="bannertext">
                  Resume
                  <img src={require("../images/myChest.png")} />
                </button>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/Contacts">
              <div className="tab button">
                <button className="bannertext">
                  Contacts
                  <img src={require("../images/myGo.png")} />
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
