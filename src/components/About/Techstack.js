import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
    DiLaravel
} from "react-icons/di";
import {
  SiPytorch,
    SiPhp,
    SiHtml5,
    SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
          <h5>C++</h5>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiHtml5 />
            <h5>HTML5</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhp />
            <h5>PHP</h5>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
          <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
          <h5>NodeJs</h5>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <h5>ReactJS</h5>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiLaravel />
            <h5>Laravel</h5>
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
          <h5>Python</h5>
      </Col>

    </Row>
  );
}

export default Techstack;
