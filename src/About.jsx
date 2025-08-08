import React from "react";
import shield from "./assets/Shield 1.png"



const About = () => {
  return (
    <>
      <div className="about-container">
          <div className="child">
            <h4>Kaleb Lechtenberg</h4>
            <p>"Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."</p>
            <img src={shield} alt="" />
          </div>
      </div>
    </>
  );
};

export default About;
