import React from "react";
import classes from "./about.module.css";
import CertificationsList from "./CertificationsList";
import Fade from "react-reveal";

const Certfications = () => {
  return (
    <div className={classes.certfications}>
      <Fade bottom delay={2000}>
        <h1 className={classes.about_h1}>Certfications</h1>
        <p className={classes.cert_p1}>
          Here are some of the certications i have acquired
        </p>
      </Fade>

      <CertificationsList />
    </div>
  );
};

export default Certfications;
