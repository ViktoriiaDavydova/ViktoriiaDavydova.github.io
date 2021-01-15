import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

class Contacts extends Component {
  render() {
    return (
      <div className="tabcontent">
        <h3>Contacts</h3>
        <br />
        <div>
          <EmailIcon /> Email me to{" "}
          <a href="mailto:viktoriiadavydov@gmail.com">
            VIKTORIIADAVYDOV@GMAIL.COM
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
        <br /> <br />
      </div>
    );
  }
}
export default Contacts;
