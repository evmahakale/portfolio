import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationRecognition from "./CertificationsRecognitions"; // Import the component
import "./Certifications.css"; // Importing external CSS for styling

function Certifications() {
  return (
    <section className="certifications-section">
      <Container>
        <Row>
          <Col md={12} className="certifications-header">
            <h2 className="certifications-title">Certifications & Recognitions</h2>
            <p className="certifications-description">
              Below are some of the certifications and recognitions I have achieved throughout my career.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <CertificationRecognition />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;