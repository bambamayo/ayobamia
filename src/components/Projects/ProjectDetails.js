import React from "react";
import Zoom from "react-reveal/Zoom";
import PropTypes from "prop-types";

const ProjectDetails = ({
  projectHeader,
  projectDetails,
  projectTech,
  linkHref1,
  linkHref2,
  iconClass,
  iconClass2
}) => (
  <Zoom delay={1000}>
    <div className="project-details">
      <h2 className="project-header">{projectHeader}</h2>
      <p className="project-detail">{projectDetails}</p>
      <h3 className="project-tech">{projectTech}</h3>
      <ul className="project-links-list">
        <li className="project-links-item">
          <a href={linkHref1} className="project-link">
            <span className="project-link-icon">
              <i className={iconClass} />
            </span>
          </a>
        </li>
        <li className="project-links-item">
          <a href={linkHref2} className="project-link">
            <span className="project-link-icon">
              <i className={iconClass2} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </Zoom>
);

ProjectDetails.propTypes = {
  projectHeader: PropTypes.string.isRequired,
  projectDetails: PropTypes.string.isRequired,
  projectTech: PropTypes.string.isRequired,
  linkHref1: PropTypes.string.isRequired,
  linkHref2: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  iconClass2: PropTypes.string.isRequired
};

export default ProjectDetails;
