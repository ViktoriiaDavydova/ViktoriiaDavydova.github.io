import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

class Contacts extends Component {
  render() {
    return (
      <div className="tabcontent contacts">
        <div>
          <EmailIcon /> Email me to{" "}
          <a href="mailto:viktoriiadavydov@gmail.com">
            viktoriiadavydov@gmail.com
          </a>
        </div>
        <br />
        <br />
        <div>
          <LinkedInIcon />{" "}
          <a
            href="https://www.linkedin.com/in/viktroriia-davydova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn page
          </a>
        </div>
        <footer className="hide">
          Contacts
          <img src={require("../images/myGo.png")} alt="go_sign" />
        </footer>
      </div>
    );
  }
}
export default Contacts;
