import React from "react";
import Zoom from "react-reveal/Zoom";
import "./contact.css";

const Contact = () => (
  <>
    <div className="contact">
      <h2 className="contact-header">Hire me</h2>
      <Zoom delay={500}>
        <ul className="contact-details-list">
          <li className="email contact-detail">
            <a className="profile-link" href="mailto:ayobamiagunroye@gmail.com">
              <span>
                Email <i className="far fa-envelope" />
              </span>
            </a>
          </li>
          <li className="github contact-detail">
            <a className="profile-link" href="https://github.com/bambamayo">
              <span>
                github <i className="fab fa-github" />
              </span>
            </a>
          </li>
          <li className="twitter contact-detail">
            <a className="profile-link" href="https://twitter.com/agunroye_">
              <span>
                twitter <i className="fab fa-twitter" />
              </span>
            </a>
          </li>
          <li className="codepen contact-detail">
            <a className="profile-link" href="https://codepen.io/ayobamicodes/">
              <span>
                codepen <i className="fab fa-codepen" />
              </span>
            </a>
          </li>
          <li className="linkedin contact-detail">
            <a
              className="profile-link"
              href="https://www.linkedin.com/in/ayobami-agunroye/"
            >
              <span>
                linkedin <i className="fab fa-linkedin" />
              </span>
            </a>
          </li>
        </ul>
      </Zoom>
    </div>
  </>
);

export default Contact;
