import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <strong className= "purple"><Card.Title>{props.title}</Card.Title></strong>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          


        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}


      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
