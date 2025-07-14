import React from "react";

import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiSpringboot,
  SiHibernate,
  SiRabbitmq,
  SiApachekafka,
  SiOracle,
  SiSpring,
  SiGooglecloud,
  SiJquery,
  SiDocker,
  SiKubernetes,
  SiHtml5,
  SiBootstrap,
  SiJunit5,
  
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiJava /><h3>Java</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot /><h3>SpringBoot</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate /><h3>Hibernate</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h3>Java script</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h3>React JS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><h3>Mongo DB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><h3>Git</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><h3>Postgresql</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq /><h3>Rabbit MQ</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka /><h3>Apache kafka </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /><h3>Oracle </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring /><h3>Spring </h3>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud /><h3>Google Cloud Platform</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery /><h3>Jquery</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /><h3>Docker</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /><h3>Kubernetes</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /><h3>Html5</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap /><h3>Bootstrap</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJunit5/><h3>Junit5</h3>
      </Col>
    </Row>
  );
}

export default Techstack;
