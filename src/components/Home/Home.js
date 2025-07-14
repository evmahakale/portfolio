import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        </Container>
      </Container>
    </section>
  );
}

export default Home;