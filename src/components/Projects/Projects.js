import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ici, vous trouverez mes récents travaux
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CV en ligne"
              description="Créer votre CV en quelques clics en remplissant un formulaire. Réalisé en PHP, JS"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Projet UTT"
                description="Un projet effectué à l'école pour évaluer nos compétences en PHP et en HTML/CSS/JS."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Drink Water"
                description="Un projet d'application mobile qui permet de surveiller la consommation d'eau durant la journée."
            />
          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Mon Frigo"
                description="Cette application mobile a été conçue pour faire l'inventaire de votre refrigérateur."
                link="https://drive.google.com/u/0/uc?id=15OdM3bazRWO4EqqSzqf1g6pcLsNCR_cb&export=download"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
