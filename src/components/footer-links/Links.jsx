import React from "react";
import './links.css';

const Links = ({ title, link1, link2, link3, link4 }) => {
  return (
    <div className="gpt3__links">
      <h4>{title}</h4>
      <p>{link1}</p>
      <p>{link2}</p>
      <p>{link3}</p>
      <p>{link4}</p>
    </div>
  );
};

export default Links;
