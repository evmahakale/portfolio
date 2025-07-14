import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
        I am a Java Full-Stack developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any java based technology.
        <br /><br/>
        </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Vollybool, Cricket.
            </li>
            <li className="about-activity">
              <ImPointRight /> Participate in Coding Competition.
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 175)" }}>
            "First and foremost, I'm Coder - Building The Elegant Solutions 1 Line At a Time.     - <i>By Eeshwar</i></p>
          {/* <footer className="blockquote-footer">Eeshwar</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
