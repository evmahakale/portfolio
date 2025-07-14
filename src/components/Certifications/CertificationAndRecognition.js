import React from "react";
import { Container } from "react-bootstrap";
import { FaAward } from "react-icons/fa"; // Importing icons
import "./CertificationAndRecognition.css"; // Importing external CSS file

function certificationAndRecognition() {

  const CertificationAndRecognition1= [
    "Java OCA Java SE Programmer I & II exam (1Z0-808 & 1Z0-809)",
    "GCP Cloud Associate Cloud Engineer"
  ];

    return (
      <Container fluid className="certificate-section">
  
        {/* Certification & Recognition Section */}
        <div className="certification-card">
          <ul className="certification-list">
            {certificationAndRecognition1.map((certification, index) => (
              <li key={index} className="certification-item">
                <FaAward className="icon" /> {certification}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
  
  export default CertificationAndRecognition;