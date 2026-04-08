import React from "react";
import PropTypes from "prop-types";

const SocialIcons = ({ links }) => {
  return (
    <div className="social-icons">
      {links.map((item) => (
        <a
          key={item.icon}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab ${item.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

SocialIcons.propTypes = {
  links: PropTypes.array.isRequired,
};

export default SocialIcons;