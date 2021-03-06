import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card.jsx";
import Resume from "./resume.pdf";

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          I am a junior web developer. Learning programming through the
          Programming Hero course.
          <br />
          Below is my resume.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma,Photoshop, Sketch,Adobe,Adobe xd"}
          />
        </div>
        {/* second card */}

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html.Css,Javascript,React"}
          />
        </div>

        {/* 3rd card */}

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"My portfolio website"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
