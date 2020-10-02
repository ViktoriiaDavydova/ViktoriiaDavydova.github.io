import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="tabcontent">
        <h3>Contacts</h3>
        <br />
        <div>
          <img className="float-left" src={require("../images/email.png")} />
          VIKTORIIADAVYDOV@GMAIL.COM{" "}
          <a href="mailto:viktoriiadavydov@gmail.com">Email me</a>
        </div>
        <br /> <br />
        <div>
          <img className="float-left" src={require("../images/phone.png")} />
          1(514)746-54-28{" "}
        </div>
        <br /> <br />
        <div>
          <img className="float-left" src={require("../images/linkedin.png")} />
          <a
            href="https://www.linkedin.com/in/viktroriia-davydova/"
            target="_blank"
          >
            My LinkedIn page
          </a>
        </div>
      </div>
    );
  }
}
export default Contacts;
