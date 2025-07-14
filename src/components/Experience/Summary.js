import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon
import "./Summary.css"; // Importing external CSS file

function SummaryCard() {
  const summaryItems = [
    "Senior Full Stack Java Developer with around 9 years of IT experience in analysis, design, development, testing and implementing various Web-based, Client/Server Applications along with Enterprise and Distributed applications across the entire Software Development Life Cycle using Java/J2EE and Web Technologies.",
    "Experience in design, development and implementation of application using Java/J2EE, Spring Boot, Hibernate, JPA, Kafka, RH OpenShift, Docker, Kubernetes, Oracle DB, JSON, XML, Web Services, HTML5, JavaScript, Angular, React JS, jQuery and Ajax.",
    "Experience in developing server-side applications like Spring Boot, Spring Security, Spring Cloud and Spring Batch.",
    "Experience in making the pipelines using tools like Jenkins, OpenShift and Kubernetes for the Microservices to streamline CI/CD pipelines and deployment processes.",
    "Experience in handling messaging services and creating real-time data streaming using Apache Kafka/RabbitMQ.",
    "Experience with JavaScript, HTML5, CSS3 (Bootstrap, Media Queries), jQuery UI plugin Skilled in creating Single Page Applications (SPA) using ReactJS and implementing React routers.",
    "Implemented Microservices Architecture with Spring Boot REST services and Expertise in developing RESTful Webservices, SOAP and APIs with JSON and XML and validate Rest endpoints with Swagger, Postman, Insomnia.",
    "Experience in GCP environment in particular GCP Console, Google Big Query, Google Pub/sub, Google Spanner, Compute Engine, Google Storage.",
    "Experienced in use of build tools like Apache Ant and Maven, Gradle, Jenkins and project tracking tools by JIRA and ServiceNow.",
    "Experience with technical practices like TDD, BDD and Continuous Integration.",
    "Experienced in handling Version Control Systems like GIT, GitHub & SVN.",
  ];

  return (
    <div className="summary-container">
      <div className="summary-content">
        <ul className="summary-list">
          {summaryItems.map((item, index) => (
            <li key={index} className="summary-item">
              <FaArrowRight className="icon" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SummaryCard;