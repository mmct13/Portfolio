import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <strong className="purple"><Card.Title>{props.title}</Card.Title></strong>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Link href={props.link} target="_blank" rel="noopener noreferrer">
          {props.link ? (
            <Button variant="primary" href={props.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </Button>
          ) : null}
        </Card.Link>



        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}


      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
