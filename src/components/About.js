import React from "react";
import myPic from "../images/my-img.png";

const About = (props) => {
  return (
    <section id="About" className="container d-flex align-items-center p-3" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
            <img
              src={myPic}
              alt="My Photo"
              className="border-0"
              style={{height: '22rem'}}
            />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 d-flex flex-column justify-content-center text-center text-md-start">
            <h3 className="mt-5 section-title">
              About Me
            </h3>
            <p className="lead">
              Hey there! My name is Amaanullah Khan Laghari. I’m a graduate of
              Software Engineering from University of Sindh. My specializations
              are in web programming. During my bachelors I’ve focused on
              database management systems and programming languages such as
              JavaScript and python. I’d completed an internship in my 3rd year
              of graduation where I was a web development intern and my role was
              to develop the frontend of the websites. Apart from that, I’ve
              completed several training courses to enhance my skills. I’ve
              never stopped learning at any stage of my life. I’m passionate
              about continuous learning and professional growth.
            </p>
          {/* </Animate> */}
        </div>
      </div>
    </section>
  );
};

export default About;
