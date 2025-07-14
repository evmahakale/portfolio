import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import "./About.css"; // Importing external CSS for styling

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About Section */}
        <Row className="about-row">
          <Col md={7} className="about-text">
            <h1 className="about-heading">
              About <span className="purple">Me</span>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Technology Stack Section */}
        <h1 className="section-heading">
          Technology <strong className="purple">Stack</strong>
        </h1>
        <Techstack />

        {/* Tools Section */}
        <h1 className="section-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;