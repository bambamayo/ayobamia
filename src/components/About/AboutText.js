import React from "react";
import Zoom from "react-reveal/Zoom";
import classes from "./about.module.css";

const AboutText = () => {
  return (
    <div className={classes.about_text}>
      <Zoom delay={1000}>
        <h1 className={classes.about_h1}>About Me</h1>
      </Zoom>
      <Zoom delay={2000}>
        <p className={classes.about_p}>
          Hi, my name is Agunroye Ayobami and i am a frontend developer. I am
          comfortable building the frontend of web applications and websites
          using frontend technologies such as Html5, Css3, Bootstrap,
          Javascript, Reactjs and Redux, also i have experience using
          development tools such as git, command line and npm. I am passionate
          about building beautiful, accessible and fully functional frontends of
          websites and web applications.
        </p>
      </Zoom>
    </div>
  );
};

export default AboutText;
