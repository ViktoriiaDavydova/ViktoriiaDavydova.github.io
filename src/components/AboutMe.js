import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div id="aboutMe" className="tabcontent">
          <h3>About Me</h3>
          <p>
            My name is Viktoriia Davydova and I am a SAIT (The Southern Alberta
            Institute of Technology) Information Technology program graduated
            student. I have applied to that program hoping to get an interesting
            job with posibility to self-development. Moreover, this area implies
            creating new things and make almost any idea to come to reality.
          </p>
          <p>
            My first introduction to a computer had a place in 1996, but at that
            time, I was just an explorer with access just for basic programs
            like Paint, FAR manager, Microsoft Office and simple games. After
            some period of time, when I was discovering the possibilities of the
            Internet I have gained experience in managing a simple Joomla based
            Internet-shop which I owned.
          </p>
          <p>
            During my studying at SAIT I faced a lot of challenges which I had
            to resolve. However, in my nature is to complete all the tasks as
            good as it's possible.{" "}
          </p>
          {/* <div className="row"> */}
          <Container>
            <Row>
              {/* <div className="col-sm"> */}
              <Col>
                <p>Courses I have taken during my education:</p>
                <ul>
                  <li> Computer Hardware and Operating System Essentials</li>
                  <li> Introduction to Networking</li>
                  <li>Professional Communications and Presentation Skills</li>
                  <li> Interface Design</li>
                  <li>Database Design and Programming</li>
                  <li> Object Oriented Software Analysis and Design</li>
                  <li>Database Design, Programming and Testing</li>
                  <li> Advanced Object-Oriented Programming</li>
                  <li>Web Application Programming</li>
                  <li> Operating Systems for Software Developers</li>
                  <li>Security for Software Developers</li>
                </ul>
              </Col>
              {/* <div className="col-sm">DFGHJ;</div> */}
              <Col>
                <p>Skills I got:</p>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML5, CSS3</li>
                  <li>Oracle Relational DB</li>
                  <li>PL/SQL</li>
                  <li>XML, JSON</li>
                  <li>Java, JSP</li>
                  <li>MySQL, SQL Plus</li>
                  <li>Azure basics</li>
                  <li>
                    MS Office (Word, Excel, PowerPoint, Outlook, Project, Visio)
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>

          <div>
            As for personal qualities, I am a good team player, working hard to
            get the task be complited and love participating in community life,
            so since I came to Canada I volunteer in Calgary Public Library as
            assistant in Early Literacy and Crack the Code programs.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
