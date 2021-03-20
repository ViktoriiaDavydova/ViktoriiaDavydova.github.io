import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import ProjCard from "./ProjCard";
import projectList from "../projectlist";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="row ">
          <CardDeck>
            {projectList.map((projItem) => (
              <ProjCard
                key={projItem.projId}
                headerStyle={projItem.headerStyle}
                projLink={projItem.projLink}
                projTitle={projItem.projTitle}
                projDescription={projItem.projDescription}
                gitHubLink={projItem.gitHubLink}
                footerText={projItem.footerText}
              />
            ))}
          </CardDeck>
        </div>
        <footer>
          Projects
          <img src={require("../images/myBulb.png")} alt="lightbulb" />
        </footer>
      </div>
    );
  }
}
export default Projects;
