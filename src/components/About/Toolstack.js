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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhpstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhpmyadmin />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
