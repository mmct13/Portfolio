import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut à toi ! Je suis <span className="purple">N'Guessan Marshall Mouayé Christ-Trésor </span>
            d' <span className="purple">Abidjan, Côte d'Ivoire.</span>
            <br />Je suis étudiant en Licence 3 d'Informatique
            <br />
            <br />
            En dehors de coder, j'aime :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Jouer aux jeux 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Ecouter de la musique 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire 📖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "practice makes perfect!"{" "}
          </p>
          <footer className="blockquote-footer">Bruce Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
