import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa"; // Importing icons
import "./ProfessionalExperience.css"; // Importing external CSS file

function ProfessionalExperience() {
  const experiences = [
    {
      role: "Sr. Java Developer [Lead]",
      company: "HSBC Technology",
      duration: "June 2022 - Present",
      responsibilities: [
        "Monitoring and controlling all the phases of Software Development Life Cycle (SDLC) process, including requirement gathering, analysis, architecture design, developing and testing as well as providing a user and operational support on applications to business users.",
        "Designed & developed microservices using Spring Boot, Restful APIs for different modules in the project as per the requirement.",
        "Used Rest Controller in Spring framework to create RESTful Web services and JSON objects for communication.",
        "Developed the backend server with Spring Boot, involving different layers of the application including entity/model, DAO/repository, Controller, Service, Business, and Persistence.",
        "Developed React pages, Web services calls and AJAX calls for the application.",
        "Started the front-end application with React and used state object React Class Component for general stateful management.",
        "Designed and implemented a scalable architecture that increased traffic handling capacity by 10x, using Load Balancer, Dockers & Kubernetes, GCP Cloud and GCP Pub Subs.",
        "Implemented improvements in Java Spring Boot-based RESTful web-services architecture, reducing downtime and increasing response times by 30%.",
        "Developed automated pipelines for deploying applications using Jenkins [CI/CD], reducing manual efforts and deployment time by 40%.",
        "Collaborated with all cross-functional teams to prioritize and deliver features aligned with customer needs, driving a 25% growth in product adoption and ensuring seamless service delivery and reliability across all key platforms.",
        "Worked on critical bug analysis and fixing in production.",
        "Environment: Java 1.8, Spring 2.x, PL/SQL, Oracle, PostgreSQL, Kafka, GIT, Tomcat 8, React, Angular, jQuery, HTML5, CSS3, JavaScript, Mockito/Junit, Agile, SQL Developer, Junit/ JUnit5, Mockito, GCP, Maven, Jenkins."
      ]
    },
    {
      role: "Sr. Java Full Stack Developer",
      company: "IBM Software Lab",
      client: "Barclays Bank",
      duration: "Mar 2021 - June 2022",
      responsibilities: [
        "Involved in various phases of software development, including analysis, architecture design, development, implementation and testing.",
        "Designed and developed the java spring Boot/Angular/React application using agile methodology and followed by scrum with tracking tool such as JIRA or ServiceNow portal.",
        "Developed java modules implementing business rules and workflows using Spring Boot.",
        "Designed and developed the REST based Microservices using the Spring Boot",
        "Used various J2EE design patterns, like DTO, DAO, and Business Delegate, Service Locator, Session Facade, Singleton and Factory patterns with the help of Hibernate ORM.",
        "Web designing & development using HTML5, CSS3, JavaScript, React Js and Ajax. Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, XHTML, and CSS.",
        "Designed and implemented a backend services using java spring boot and implemented the front-end interface using angular. Integrated the RESTful APIs to enable the communications between front-end and back-end components, ensuring secure and reliable data exchange.",
        "Designed and implemented spring security (JWT/SAML/OAuth2) feature in applications to enhance authentication and authorization to ensure robust security for application.",
        "Worked on critical bug analysis and fixing in production.",
        "Environment: Java 1.8, Spring 2.x, PL/SQL, MariaDB, Gradle, Jenkins, Confluent/Apache Kafka, Dockers, Service Mesh, JIRA, GIT, Angular 2, CSS3, Tomcat 8, Mockito, Agile, DBeaver, ELK [Elastic Stack/Logstash/Kibana], NinjaBot, Openshift Console AppD (Log Monitoring), Postman & Insomnia, RAML(MuleSoft Anypoint)."
      ]
    },
    {
      role: "Java Full Stack Developer",
      company: "TCS",
      duration: "Aug 2016 – Mar 2021",
      responsibilities: [
        "Contributed to the design and implementation of front-end as well as backend applications Java technologies JAVA, J2EE, EJB, zSP, Servlets, Java Script, jQuery, Oracle, Web Services, Struts, Hibernate, HTML, JDBC, and XML-related technologies.",
        "Implemented the code as per design. Developed the front-ends in JSP, HTML and JavaScript. Created Java Beans to capture business logic. Written SQL scripts. Debugged the implemented code as per the code design.",
        "Developed the site and integrated the dynamic pages with the static designs.",
        "The application uses the STRUTS framework. The views are programmed using JSP pages with the struts tag library, Model is a combination of EJB's and Java classes and web implementation controllers are Servlets.",
        "Used JavaScript for client-side validations, and AJAX to create interactive front-end GUI.",
        "The entire application was developed in JEE using an MVC-based architecture with help of Apache Struts and coded Struts Action classes, Model classes.",
        "Engaged in code reviews and followed secure coding practices to enhance application security and reliability.",
        "Supported the development of automated testing [Selenium] and deployment process for applications release.",
        "Worked on critical bug analysis and fixing in production.",
        "Environment: Java 1.6/1.7, J2EE, Java Helper Class, Java Servlets (Controller), JavaScript, Java Server Pages (JSP), Object-Oriented Programming (OOP), JSON, Hibernate, Struts, EJB, Cascading Style Sheets (CSS), Ajax, Web Services, XML, Weblogic10.3, Oracle10g, MySQL, SQL, PL/SQL, jQuery, Eclipse 5.1.0, SQL Developer."
      ]
    }
  ];

    return (
      <Container fluid className="experience-section">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h5 className="experience-role">
              <b>Role:</b> {experience.role}
            </h5>
            <h5 className="experience-company">
              <b>Company:</b> {experience.company}
            </h5>
            {experience.client && (
              <h5 className="experience-client">
                <b>Client:</b> {experience.client}
              </h5>
            )}
            <h5 className="experience-duration">
              <b>Duration:</b> {experience.duration}
            </h5>
            <h5 className="experience-responsibility">
              <b>Responsibilities:</b>
            </h5>
            <ul className="responsibility-list">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx} className="responsibility-item">
                  {idx !== experience.responsibilities.length - 1 && (
                    <FaArrowRight className="icon" />
                  )}{" "}
                  {idx === experience.responsibilities.length - 1 ? (
                    <b>{item}</b>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </Container>
    );
  }
  
  export default ProfessionalExperience;