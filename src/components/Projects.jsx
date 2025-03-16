import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../components/projects.css";

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "Google Play Store  ",
      description: "RoNi Choudhary",
      imgUrl: projImg6,
      projectLink:
        "https://play.google.com/store/apps/dev?id=9005912294128711330",
    },
    {
      title: "12th Agriculture Notes App",
      description: "Java & XML",
      imgUrl: projImg2,
      projectLink:
        "https://play.google.com/store/apps/details?id=com.rohitchoudhary.a12thagriculturenotes",
    },
    {
      title: "12th Physics Notes App",
      description: "Java & XML",
      imgUrl: projImg4,
      projectLink:
        "https://play.google.com/store/apps/details?id=com.rohitchoudhary.class12thphysicsnotes",
    },
  ];

  const projectsTab2 = [
    {
      title: "Swami Keshwanand Sr. Sec. School",
      description: "HTML, CSS, JavaScript, BootStrap",
      imgUrl: projImg1,
      projectLink: "https://rohitsinghjakhar.github.io/SwamiKeshwanandSchool/",
    },
    {
      title: "Student Registration",
      description: "Student Registration",
      imgUrl: projImg3,
      projectLink:
        "https://rohitsinghjakhar.github.io/StudentRegistrationPage/",
    },
    {
      title: "Weather App",
      description: "Real-time Weather API",
      imgUrl: projImg5,
      projectLink: "https://rohitsinghjakhar.github.io/Weather_App/",
    },
  ];

  const projectsTab3 = [
    {
      title: "School Management System",
      description: "Spring Boot & React",
      imgUrl: projImg8,
      projectLink: "https://rohitsinghjakhar.github.io/SwamiKeshwanandSchool/",
    },
    {
      title: "Student Log in",
      description: "Student Login",
      imgUrl: projImg7,
      projectLink:
        "https://rohitsinghjakhar.github.io/StudentRegistrationPage/login.html",
    },
    {
      title: "School Management System",
      description: "Spring Boot & React",
      imgUrl: projImg9,
      projectLink: "https://rohitsinghjakhar.github.io/SwamiKeshwanandSchool/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of my projects in different categories.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Android Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Website Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Backend Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
