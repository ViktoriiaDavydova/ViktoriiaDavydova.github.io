import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  .active & {
    background: #538791;
    color: white;
  }
`;

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

        
          <NavLink className="tab button " exact to="/">
            <Button className="bannertext " >
              About me
              <img
                src={require("../images/myQuestion.png")}
                alt="question_mark"
              />
            </Button>
          </NavLink>

          <NavLink className="tab button" to="/Projects">
            <Button className="bannertext">
              Projects
              <img src={require("../images/myBulb.png")} alt="lightbulb" />
            </Button>
          </NavLink>

          <NavLink className="tab button" to="/Resume">
            <Button className="bannertext">
              Resume
              <img
                src={require("../images/myChest.png")}
                alt="treasure_chest"
              />
            </Button>
          </NavLink>

          <NavLink className="tab button" to="/Contacts">
            <Button className="bannertext">
              Contacts
              <img src={require("../images/myGo.png")} alt="go_sign" />
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}
