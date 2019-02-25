import React from "react";
import Zoom from "react-reveal/Zoom";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="header-text-box">
        <h1>
          <Zoom delay={1000}>
            <span className="text-primary">Ayobami Agunroye </span>
          </Zoom>
          <Zoom delay={1500}>
            <span className="text-secondary">Frontend Developer</span>
          </Zoom>
        </h1>
      </div>
    </>
  );
};

export default Home;
