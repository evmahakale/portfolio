import React from "react";
import "./TechnologySkills.css"; // Importing external CSS file

const TechSkillCard = () => {
  // Sample data for the table
  const data = [
    { id: "Technology Stack", name: "Java 8/17/ J2EE, Spring Boot, Web Services (REST & SOAP), Microservices, Log4j,ORM(Hibernate)" },
    { id: "Web Development  ", name: "ReactJs, Angular, jQuery, HTML5, CSS3, JavaScript, Typescript, Ajax, JSP, XML." },
    { id: "Event-Driven Technologies", name: "Kafka, ActiveMQ, RabbitMQ" },
    { id: "DevOps & Build Tools", name: "Maven, Gradle, Jenkins, Docker, Kubernetes." },
    { id: "Database", name: "Oracle 10/11g, MongoDB (NoSQL), PostgreSQL, MySQL, JPA, JDBC." },
    { id: "Log Analysis", name: "ELK, NinjaBot, GCP Console, Splunk, AppD, OpenShift Console" },
    { id: "Cloud Platform ", name: "GCP, AWS" },
    { id: "IDE", name: "IntelliJ IDEA, STS, VSCode, Eclipse." },
    { id: "Testing Tools", name: "Junit/ JUnit5, Mockito, Spring Test Framework." },
    ];

  return (
    <div className="tech-skills-container">
      <div className="header">
        <h2>Technology Skills</h2>
      </div>
      <table className="skills-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechSkillCard;