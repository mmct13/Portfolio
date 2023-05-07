import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <strong className= "purple"><Card.Title>{props.title}</Card.Title></strong>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          <a className="purple" target='_blank' href={props.link}>
          <Card.Link>
              Lien de téléchargement
          </Card.Link>
          </a>


        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}


      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
