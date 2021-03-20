import React, { Component } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ProSidebar className="pro_sidebar">
          <SidebarContent className="menu_bar">
            <img
              className="aboutMeImg"
              src={require("../images/aboutMeImg.jpg")}
              alt="Some nature"
            />
            <div className="frames">
              <div> VIKTORIIA DAVYDOVA </div>
              <div>Front-End Web Developer</div>
            </div>
            <Menu className="menu_items">
              <MenuItem>
                ABOUT ME
                <Link exact to="/" />
              </MenuItem>
              <MenuItem>
                PROJECTS
                <Link to="/projects" />
              </MenuItem>
              <MenuItem>
                RESUME
                <Link to="/resume" />
              </MenuItem>
              <MenuItem>
                CONTACTS
                <Link to="/contacts" />
              </MenuItem>
              {/* <SidebarFooter> */}
              {/* <MenuItem className="sidebar_footer">GET IN TOUCH</MenuItem> */}
              {/* </SidebarFooter> */}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    );
  }
}
