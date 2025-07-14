import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CertificationsRecognitions.css"; // Importing external CSS for styling

function CertificationsRecognitions() {
  const certifications = [
    {
      title: "Google Cloud Associate Cloud Engineer",
      date: "Issued: August 2024",
      description: "Demonstrated proficiency in deploying and managing GCP resources.",
    },
    {
      title: "Oracle Certified Java Programmer (OCPJP)",
      date: "Issued:  September 2024",
      description: "Certified in Java8 SE programming and object-oriented development.",
    }
  ];

  return (
    <section className="certifications-recognitions-section">
      <Container>
        <Row>
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} key={index} className="certification-col">
              <Card className="certification-card">
                <Card.Body>
                  <Card.Title className="certification-title">{cert.title}</Card.Title>
                  <Card.Subtitle className="certification-date">{cert.date}</Card.Subtitle>
                  <Card.Text className="certification-description">{cert.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CertificationsRecognitions;