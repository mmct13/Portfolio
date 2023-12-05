import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bnbImg from "../../Assets/Projects/bnbimg.png";
import monjeton from "../../Assets/Projects/monjton.png"
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
              imgPath={bnbImg}
              isBlog={false}
              title="Application de renommage d'image"
              description="Un projet d'application de renommage d'image en Python avec une interface graphique en Tkinter qui permet de renommer plusieurs images en même temps."
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mon Frigo"
              description="Cette application mobile a été conçue pour faire l'inventaire de votre refrigérateur."
              link="https://drive.google.com/u/0/uc?id=15OdM3bazRWO4EqqSzqf1g6pcLsNCR_cb&export=download"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monjeton}
              isBlog={false}
              title="MonJeton"
              description="Cette application mobile conçue avec React Native et Firebase permet de gérer son portefeuille en organisant ses dépenses, ses revenus et la planification de ses budgets"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
