import React from "react";

const SocialLinks = () => {
  return (
    <ul className="social-links">
      <li className="social-links-item">
        <a href="https://github.com/bambamayo" className="icon icon1">
          <span className="social-links-icon social-links-icon-1">
            <i className="fab fa-github" />
          </span>
        </a>
      </li>
      <li className="social-links-item">
        <a href="https://codepen.io/ayobamicodes/" className="icon icon1">
          <span className="social-links-icon social-links-icon-2">
            <i className="fab fa-codepen" />
          </span>
        </a>
      </li>
      <li className="social-links-item">
        <a href="https://twitter.com/agunroye_" className="icon icon1">
          <span className="social-links-icon social-links-icon-3">
            <i className="fab fa-twitter" />
          </span>
        </a>
      </li>
      <li className="social-links-item">
        <a
          href="https://www.linkedin.com/in/ayobami-agunroye/"
          className="icon icon1"
        >
          <span className="social-links-icon social-links-icon-4">
            <i className="fab fa-linkedin" />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
