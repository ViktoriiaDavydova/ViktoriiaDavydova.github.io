import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div >
        <header className="hide">
          About Me
          <img src={require("../images/myQuestion.png")} alt="question_mark" />
        </header>
        <div className="tabcontent aboutme" id="body">
          <h1>
            <b>HI, I AM VIKTORIIA,</b>
          </h1>
          <h1>And I am looking for a Front-End Web Developer role</h1>
          <br />
          <p>
            I passionate about creating new things and bring my ideas to life,
            being inspired by the people and the world around me.
          </p>
          <br />
          <p>
            I am constantly improving my skills and broadening my knowledge.
          </p>
          <br />
          <p>I love challenges and finding non-standard ways to solve them.</p>
          <br />
          <p>
            <img
              className="imgs"
              src={require("../images/skills.png")}
              alt="skills"
            ></img>
            My technical skills include but are not limited to HTML, CSS,
            JavaScript, React, Bootstrap, Node.js, Relational DB, Oracle,
            MongoDB, MySQL, Adobe XD, MS Office, Git, Linux.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
