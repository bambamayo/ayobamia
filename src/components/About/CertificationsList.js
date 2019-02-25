import React from "react";
import Fade from "react-reveal";

import classes from "./about.module.css";

const CertificationsList = () => {
  return (
    <>
      <Fade bottom delay={2000}>
        <div className={classes.cert_container}>
          <div className={`${classes.cert} ${classes.cert_1}`} />

          <div className={`${classes.cert_details} ${classes.cert_1_detail}`}>
            <h2>Andela learning community</h2>
            <p>
              received on the 22<sup>nd</sup> of august, 2018
            </p>
          </div>
        </div>
      </Fade>

      <Fade bottom delay={4000}>
        <div className={classes.cert_container}>
          <div className={`${classes.cert} ${classes.cert_2}`} />
          <div className={`${classes.cert_details} ${classes.cert_2_details}`}>
            <h2>FreeCodeCamp - Responsive web design </h2>
            <p>
              received on the 17<sup>th</sup> of february, 2019
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default CertificationsList;
