import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="tabcontent">
          <h3>About Me</h3>
          <br />
          <p>
            My name is Viktoriia Davydova and I am a SAIT (The Southern Alberta
            Institute of Technology) Information Technology program graduated
            student. I have applied to that program hoping to get an interesting
            job with the possibility of self-development. Moreover, this area
            implies creating new things and make almost any idea to come to
            reality.
          </p>

          <p>
            During my studying at SAIT I faced a lot of challenges that I had to
            resolve. However, my nature is to complete all the tasks as well as
            it's possible.
          </p>
          <Container>
            <Row>
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
            get the task to be completed and love participating in community
            life, so since I came to Canada I volunteer in Calgary Public
            Library as an assistant in Early Literacy and Crack the Code
            programs.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
