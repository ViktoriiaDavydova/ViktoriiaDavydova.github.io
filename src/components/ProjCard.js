import React from "react";
import {
  Card,
  CardFooter,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardLink,
} from "reactstrap";
import { CardActionArea } from "@material-ui/core";

function ProjCard(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <Card>
        <CardHeader style={props.headerStyle}></CardHeader>
        <CardBody>
          <CardActionArea
            href={props.projLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardTitle>{props.projTitle}</CardTitle>
            <CardText>{props.projDescription}</CardText>
          </CardActionArea>
        </CardBody>
        <CardFooter className="text-muted">
          <CardLink
            href={props.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.footerText}
          </CardLink>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProjCard;
