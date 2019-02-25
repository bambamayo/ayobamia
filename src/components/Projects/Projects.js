import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";
import "./projects.css";

const Projects = () => (
  <>
    <div className="projects">
      <h1 className="projects-h1">Some things i have worked on</h1>
      <div className="project-list">
        <ProjectImage differentClass="p-image p-image-3" />
        <ProjectDetails
          projectHeader="portfolio website with react js"
          projectDetails="I rebuilt my portfolio website using react js for the view layer,
           react-router for routing and css3 for styling. This single page static application
            is fully responsive with the help of css media queries. "
          projectTech="ReactJs, React-Router, Css3"
          linkHref1="https://github.com/bambamayo/bambam-photography/"
          iconClass="fab fa-github"
          linkHref2="https://bambamayo.github.io/bambam-photography/"
          iconClass2="fas fa-globe"
        />
      </div>
      <div className="project-list">
        <ProjectImage differentClass="p-image p-image-1" />
        <ProjectDetails
          projectHeader="bambam photography"
          projectDetails="A portfolio website for a fictional photographer. Built with html 
          css and javascript. Animations are handled by an external animation library called 
          AOS (Animate on scroll). All pictures were gotten from pexels.com and the website is 
          fully responsive."
          projectTech="Html5, Css3, Javascript"
          linkHref1="https://github.com/bambamayo/bambam-photography/"
          iconClass="fab fa-github"
          linkHref2="https://bambamayo.github.io/bambam-photography/"
          iconClass2="fas fa-globe"
        />
      </div>
      <div className="project-list">
        <ProjectImage differentClass="p-image p-image-2" />
        <ProjectDetails
          projectHeader="My portfolio website"
          projectDetails="I built this portfolio website using html, css, vanilla javascript 
          to handle some DOM manipulations and firebase from google to handle data submitted 
          through the contact form. An external library called AOS (Animate on scroll) is used 
          to handle animations of the texts. This project was my first real foray into the world 
          of css media queries, and this makes this project fully responsive for mobile, tablet 
          and desktop screens."
          projectTech="Html5, Css3, Javascript, Firebase"
          linkHref1="https://github.com/bambamayo/portfolio/"
          iconClass="fab fa-github"
          linkHref2="https://bambamayo.github.io/portfolio/"
          iconClass2="fas fa-globe"
        />
      </div>
    </div>
  </>
);

export default Projects;
