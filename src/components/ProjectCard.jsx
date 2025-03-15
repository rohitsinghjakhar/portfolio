import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Button 
            variant="primary" 
            className="project-btn"
            onClick={() => window.open(projectLink, "_blank")}
          >
            View Project
          </Button>
        </div>
      </div>
    </Col>
  );
};
