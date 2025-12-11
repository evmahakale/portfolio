import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CertificationsRecognitions.css"; // Importing external CSS for styling

function CertificationsRecognitions() {
  const cloudCertifications = [
    {
      title: "Google Cloud Associate Cloud Engineer",
      date: "Issued: August 2024",
      description: "Demonstrated proficiency in deploying and managing GCP resources.",
    },
    {
      title: "AWS Certified Developer – Associate",
      date: "Issued: November 2025",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.",
    },
  ];

  const javaCertifications = [
    {
      title: "Oracle Certified Java Programmer (1Z0-808)",
      date: "Issued: September 2024",
      description: "Certified in Java8 SE programming and object-oriented development.",
    },
    {
      title: "Oracle Certified Java Programmer II (1Z0-809)",
      date: "Issued: September 2024",
      description: "Certified in Java8 SE programming and Advance object-oriented development.",
    },
    {
      title: "Oracle Certified Professional: Java SE 17 Developer (1Z0-829)",
      date: "Issued: December 2025",
      description: "Certified in Java SE 17, covering modern features and best practices for Java development.",
    },
  ];

  return (
    <section className="certifications-recognitions-section">
      <Container>
        <h2 className="section-title">Cloud Certifications</h2>
        <Row>
          {cloudCertifications.map((cert, index) => (
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

        <h2 className="section-title">Java Certifications</h2>
        <Row>
          {javaCertifications.map((cert, index) => (
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