import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import Links from "../../components/footer-links/Links";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwood K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <Links
          title="Links"
          link1="Overons"
          link2="Social Media"
          link3="Counters"
          link4="Contact"
        />
        <Links
          title="Company"
          link1="Terms & Conditions"
          link2="Provacy Policy"
          link3="Contact"
        />
        <Links
          title="Get in touch"
          link1="Crechterwood K12 182 DK Alknjkcb"
          link2="085-132567"
          link3="info@payme.net"
        />
      </div>
      <div className="gpt3__footer-copyright">
        <p>2021 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
