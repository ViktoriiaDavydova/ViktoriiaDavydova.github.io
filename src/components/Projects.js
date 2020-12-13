import React, { Component } from "react";
import {
  Card,
  CardFooter,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardLink,
  CardDeck,
} from "reactstrap";
import { CardActionArea } from "@material-ui/core";

class Projects extends Component {
  render() {
    return (
      <div className="tabcontent">
        <h3>Projects</h3>
        <div className="row">
          <CardDeck>
            <div className="col-lg-4 col-md-6">
              <Card>
                <CardHeader style={{ backgroundColor: "#b7d9f4" }}></CardHeader>
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
            </div>

            <div className="col-lg-4 col-md-6">
              <Card>
                <CardHeader style={{ backgroundColor: "#89358d" }}></CardHeader>
                <CardBody>
                  <CardActionArea
                    href="https://protected-island-47075.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle>ToDo List</CardTitle>
                    <CardText>
                      Small project made with EJS, MongoDB and Mongoose through
                      The App Brewery course
                    </CardText>
                  </CardActionArea>
                </CardBody>
                <CardFooter className="text-muted">
                  <CardLink
                    // href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    No repository link is provided
                  </CardLink>
                </CardFooter>
              </Card>
            </div>

            <div className="col-lg-4 col-md-6">
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
            </div>

            <div className="col-lg-4 col-md-6">
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
            </div>

            <div className="col-lg-4 col-md-6">
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
            </div>

            <div className="col-lg-4 col-md-6">
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
            </div>
          </CardDeck>
        </div>
        <br />
      </div>
    );
  }
}
export default Projects;
