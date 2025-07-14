import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TechSkillCard from "../Experience/TechnologySkills";
import SummaryCard from "../Experience/Summary";
import ProfessionalExperience from "./ProfessionalExperience";
import "./ProfessionalSummary.css"; // Importing external CSS file

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        {/* Professional Summary Section */}
        <Row className="section-row">
          <Col md={12} className="section-col">
            <h2 className="section-header">Professional Summary</h2>
         {/* Divider */}
         <hr className="section-divider" />
            <SummaryCard />
          </Col>
        </Row>
 


        {/* Technology Skills Section */}
        <Row className="section-row">
          <Col md={12} className="section-col">
            <h2 className="section-header">Technology Skills</h2>
          {/* Divider */}
          <hr className="section-divider" />
           <TechSkillCard />
          </Col>
        </Row>

        {/* Professional Experience Section */}
        <Row className="section-row">
          <Col md={12} className="section-col">
            <h2 className="section-header">Professional Experience</h2>
         {/* Divider */}
         <hr className="section-divider" />
         <ProfessionalExperience />
          </Col>
        </Row>


      </Container>
    </Container>
  );
}

export default Experience;