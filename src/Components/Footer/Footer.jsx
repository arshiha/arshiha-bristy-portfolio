import React from "react";
import "./Footer.css";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100" }} />
      <div className="f-content">
        <span>arshihabristy5@gmail.com</span>
        <div className="f-icons">
          <Linkedin color="white" size="3rem"></Linkedin>
          <Facebook color="white" size="3rem"></Facebook>
          <Github color="white" size="3rem"></Github>
        </div>
        <div>
          Copyright © 2022 Webflow, Inc. All Rights Reserved <br />
          <div className="name">ARSHIHA BRISTY</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
