import React from "react";
import Zoom from "react-reveal/Zoom";
import PropTypes from "prop-types";

const ProjectImage = ({ differentClass }) => {
  return (
    <Zoom delay={500}>
      <div className="project-image">
        <div className={differentClass} />
      </div>
    </Zoom>
  );
};

ProjectImage.propTypes = {
  differentClass: PropTypes.string.isRequired
};

export default ProjectImage;
