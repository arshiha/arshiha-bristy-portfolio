import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instragram from "../../img/instagram.png";
import boy from "../../img/boy.png";
// import thumbup from "../../img/thumbup.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import FlotingDiv from "../FlotingDiv/FlotingDiv.jsx";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Arshiha Bristy</span>
          <span>
            My name is Arshiha Bristy.I am junior web developer. I have been
            developing website web applications using the HTML, CSS, bootstrap,
            ES6, REST API, JSON, node, MongoDB (database), chrome React
            JavaScript programming language. Producting the quality work.
          </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <img src={Github} alt="" />

          <img src={Linkedin} alt="" />
          <img src={Instragram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img className="boy" src={boy} alt="" />
      </div>
    </div>
  );
};

export default Intro;
