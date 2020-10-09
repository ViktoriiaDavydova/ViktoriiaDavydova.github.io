import React, { Component } from "react";
import {
  Card,
  CardFooter,
  CardTitle,
  CardText,
  CardGroup,
  CardHeader,
  CardBody,
  CardLink,
} from "reactstrap";
import { CardActionArea } from "@material-ui/core";

class Projects extends Component {
  render() {
    return (
      <div className="tabcontent">
        <h3>Projects</h3>
        <div>
          <CardGroup>
            <Card>
              <CardHeader style={{ backgroundColor: "#49ac4f" }}></CardHeader>
              <CardBody>
                <CardActionArea
                  href="https://viktoriiadavydova.github.io/loginPrototypeV0.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardTitle>DOG SERVICE SYSTEM</CardTitle>
                  <CardText>Group school project made with React</CardText>
                </CardActionArea>
              </CardBody>
              <CardFooter className="text-muted">
                <CardLink
                  href="https://github.com/ViktoriiaDavydova/loginPrototypeV0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </CardLink>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader style={{ backgroundColor: "#ff7124" }}></CardHeader>
              <CardBody>
                <CardActionArea
                  href="https://viktoriiadavydova.github.io/City-Delicatessen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardTitle>CITY DELICATESSEN</CardTitle>
                  <CardText>
                    Small school project made with HTML and CSS
                  </CardText>
                </CardActionArea>
              </CardBody>
              <CardFooter className="text-muted">
                <CardLink
                  href="https://github.com/ViktoriiaDavydova/City-Delicatessen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </CardLink>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader style={{ backgroundColor: "#fff005" }}></CardHeader>
              <CardBody>
                <CardActionArea
                  href="https://viktoriiadavydova.github.io/Car-Rental/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardTitle>CAR RENTAL</CardTitle>
                  <CardText>
                    Small school project made with HTML and CSS
                  </CardText>
                </CardActionArea>
              </CardBody>
              <CardFooter className="text-muted">
                <CardLink
                  href="https://github.com/ViktoriiaDavydova/Car-Rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </CardLink>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader style={{ backgroundColor: "#0066a4" }}></CardHeader>
              <CardBody>
                <CardTitle>FLIGHT MENU</CardTitle>
                <CardText>Small school project made with Java</CardText>
              </CardBody>

              <CardFooter className="text-muted">
                <CardLink
                  href="https://github.com/ViktoriiaDavydova/Flight-Menu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </CardLink>
              </CardFooter>
            </Card>
          </CardGroup>
        </div>
        <br />
      </div>
    );
  }
}
export default Projects;
