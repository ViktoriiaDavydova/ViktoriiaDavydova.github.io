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
          <NavLink
            className="tab button "
            exact
            activeClassName="active"
            to="/"
          >
            <button className="bannertext">
              About me
              <img src={require("../images/myQuestion.png")} />
            </button>
          </NavLink>

          <NavLink
            className="tab button "
            exact
            activeClassName="active"
            to="/Projects"
          >
            <button className="bannertext">
              Projects
              <img src={require("../images/myBulb.png")} />
            </button>
          </NavLink>

          <NavLink
            className="tab button "
            exact
            activeClassName="active"
            to="/Resume"
          >
            <button className="bannertext">
              Resume
              <img src={require("../images/myChest.png")} />
            </button>
          </NavLink>

          <NavLink
            className="tab button "
            exact
            activeClassName="active"
            to="/Contacts"
          >
            <button className="bannertext">
              Contacts
              <img src={require("../images/myGo.png")} />
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
