import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
    SiPhpmyadmin,
    SiPhpstorm,
    SiMysql
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
          <h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
          <h5>VScode</h5>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhpstorm />
            <h5>PhpStorm</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
            <h5>Postman</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhpmyadmin />
            <h5>PhpMyAdmin</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <h5>MySQL</h5>
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
          <h5>Heroku</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
