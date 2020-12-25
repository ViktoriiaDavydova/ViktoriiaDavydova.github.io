import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import ProjCard from "./ProjCard";
import projectList from "../projectlist";

class Projects extends Component {
  render() {
    return (
      <div className="tabcontent">
        <h3>Projects</h3>
        <div className="row">
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
        <br />
      </div>
    );
  }
}
export default Projects;
