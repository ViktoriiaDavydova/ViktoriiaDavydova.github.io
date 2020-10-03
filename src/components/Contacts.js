import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="tabcontent">
        <h3>Contacts</h3>
        <br />
        <div>
          <img className="float-left" src={require("../images/email.png")} alt="email_icon"/>
          Email me to{" "}
          <a href="mailto:viktoriiadavydov@gmail.com">
            VIKTORIIADAVYDOV@GMAIL.COM
          </a>
        </div>
        <br /> <br />
        <div>
          <img className="float-left" src={require("../images/phone.png")} alt="phone_icon"/>
          1(514)746-54-28{" "}
        </div>
        <br /> <br />
        <div>
          <img className="float-left" src={require("../images/linkedin.png")} alt="lindedin_icon"/>
          <a
            href="https://www.linkedin.com/in/viktroriia-davydova/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            My LinkedIn page
          </a>
        </div>
      </div>
    );
  }
}
export default Contacts;
