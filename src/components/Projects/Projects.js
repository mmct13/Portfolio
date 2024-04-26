import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bnbImg from "../../Assets/Projects/bnbimg.png";
import monjeton from "../../Assets/Projects/monjton.png"
import xpose from "../../Assets/Projects/xpose.png";
import santerich from "../../Assets/Projects/santerich.png";
import currency from "../../Assets/Projects/money-converter.png";
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xpose}
              isBlog={false}
              title="X'Pose"
              description="Xpose est une plateforme web dédiée aux commerçants des réseaux sociaux tels que WhatsApp, TikTok et Instagram. Les utilisateurs peuvent publier des articles et être contactés directement sur leurs réseaux pour passer des commandes, simplifiant ainsi le processus de vente en ligne."
              link="https://xpose-tan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={santerich}
              isBlog={false}
              title="SanteRich"
              description="SanteRich est un catalogue en ligne de produits LongRich commandables via WhatsApp. Fait avec NextJS et Tailwind CSS; les produits sont stockés sur Firebase."
              link="https://santerich.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Convertisseur de devises"
              description="Convertisseur de devises est une application mobile développée en React Native et qui permet de convertir de l'argent en dollars, euros, pounds..."
              link="https://github.com/mmct13/money-convertiser"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
