import React from "react";
import Boy from "../../img/boy.png";
import "./About.css";

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>ABOUT ME</h1>
          </div>
          <div className="content">
            <h3>My name is Arshiha Bristy.I am a Junior Web developer.</h3>
            <p>
              I am a programmer specializing in developing web applications.I
              have been developing website web applications using the
              HTML,CSS,Bootstrap,Javascript,React,Node,MongoDB programming
              language.If you would like to know more about my web development
              services, please take a look at my website, which is detailed
              below.
            </p>
            <div className="button-btn">
              <a href="">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-github"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src={Boy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
