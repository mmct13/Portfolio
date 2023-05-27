import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez moi me <span className="purple"> présenter </span>
            </h1>
            <p className="home-about-body">
              J'adore les nouvelles technologies et l'informatique !😅️
              <br />
              <br />Je suis à l'aise avec
              <i>
                <b className="purple"> C/C++, JavaScript, PHP, HTML/CSS. </b>
              </i>
              <br />
              <br />
              Je travaille aussi avec les frameworks &nbsp;
              <i>
                <b className="purple">Laravel </b> et &nbsp;
                <b className="purple">Angular </b>

              </i>
              <br />
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MES RESEAUX SOCIAUX</h1>
            <p>
              <span className="purple">Suivez </span>moi sur
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="mailto:marshallchrist@yahoo.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="tel:002250788207818"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mmct13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MouayeC"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/christ-marshall-n-guessan-b652851aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thsmarsh__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
