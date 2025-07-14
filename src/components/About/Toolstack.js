import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiInsomnia,
  SiSwagger,
  SiEclipseide,
  SiIntellijidea,
  SiGradle,
  SiGithub,
  SiElasticstack,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><h3>Visual Studio Code</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><h3>Postman</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia /><h3>Insomnia</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger /><h3>Swagger</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /><h3>Eclipseide</h3>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /><h3>Intellij Idea</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGradle /><h3>Gradle</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><h3>Git Hub</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticstack /><h3>Elastic Stack</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /><h3>Jira</h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
