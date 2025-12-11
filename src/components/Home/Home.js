import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Type from "./Type";
import "./Home.css"; // Importing external CSS file for styling

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Welcome Message Section */}
            <Col md={7} className="home-header">
              <h1 className="welcome-heading">
                Welcome to the <span className="coding-highlight">Coding</span> World!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👨‍💻
                </span>
              </h1>
              <div className="welcome-text">
                <h2>
                  I'm a <Type />
                </h2>
                <p className="home-description">
                  I have 8+ years of professional IT experience in analysis,
                  design, and development of various microservice/web-based
                  applications. I’m looking for a challenging career with a
                  progressive organization that will enable me to utilize my
                  skills, abilities, and education while further developing my
                  innovative skills to work with emerging technologies.
                </p>
                <blockquote className="home-quote">
                  <i>"Code is like humor. When you have to explain it, it’s bad." - By Cory House</i>
                </blockquote>
              </div>
            </Col>

            {/* Image Section */}
            <Col md={5} className="home-image">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <br />
          <br />
          <br />

          {/* AI Section */}
          <Row className="ai-section" style={{ marginTop: "30px" }}>
            <Col md={6}>
              <Card
                className="ai-card"
                style={{
                  borderRadius: "15px",
                  padding: "25px",
                  boxShadow: "0px 4px 12px rgba(127, 122, 122, 0.1)", // Retained shadow for a subtle effect
                }}
              >
                <Card.Body>
                  <h2
                    className="ai-title"
                    style={{
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#333", // Dark gray for the title
                    }}
                  >
                    AI Revolutionizing Development
                  </h2>
                  <br />
                  <p
                    className="ai-description"
                    style={{
                      textAlign: "left",
                      fontSize: "1.1rem",
                      color: "#555", // Medium gray for the text
                      marginTop: "15px",
                    }}
                  >
                    Artificial Intelligence (AI) is transforming the development landscape, empowering developers to work smarter and faster. Tools like <strong>GitHub Copilot</strong>, <strong>LLM</strong> and <strong>OpenAI GPT</strong> automate repetitive coding tasks, generate optimized code, and improve overall code quality.
                  </p>
                  <p
                    className="ai-description"
                    style={{
                      textAlign: "left",
                      fontSize: "1.1rem",
                      color: "#555",
                      marginTop: "15px",
                    }}
                  >
                    AI-powered tools like <strong>SonarQube</strong> and <strong>DeepCode</strong> ensure code adheres to best practices and is free of vulnerabilities. By integrating with platforms like <strong>GitHub</strong> and <strong>GitLab</strong>, AI enhances collaboration, analyzes pull requests, and even generates documentation.
                  </p>
                  <p
                    className="ai-description"
                    style={{
                      textAlign: "left",
                      fontSize: "1.1rem",
                      color: "#555",
                      marginTop: "15px",
                    }}
                  >
                    By leveraging AI, developers can focus on solving complex problems, building innovative solutions, and staying ahead in the ever-evolving tech landscape. AI is not just a tool, it's a co-pilot for modern development.
                  </p>
                </Card.Body>
                <blockquote>
                  <i> - Latest Tech update</i>
                </blockquote>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;