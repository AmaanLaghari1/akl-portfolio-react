import React from "react";
import FormContainer from "./Formik/FormContainer";
import AnimatedSection from "./Animations/AnimatedSection"

const Contact = (props) => {
  return (
    <AnimatedSection id="Contact">
    <div id="Contact" className="container-fluid p-0 d-flex align-items-center" style={{minHeight: "100vh"}}>
      <div className="container">
        <h3 className="text-center section-title my-2">Contact Me</h3>
          <FormContainer />
          <ul className="list-unstyled small m-3">
            <li className="my-2">
            <i className="fa-solid fa-location-dot me-2"></i>
             Karachi, Pk.
            </li>
            <li className="my-2">
            <i className="fa-solid fa-envelope"></i>
            <a href="mail_to:laghariamaan@gmail.com" className="text-decoration-none mx-2">laghariamaan@gmail.com</a>
            </li>
            <li className="my-2">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+923133551379" className="text-decoration-none mx-2">+923133551379</a>
            </li>
            <li className="my-2">
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/amaan-laghari-86a7a5233/" className="text-decoration-none mx-2">https://www.linkedin.com/in/amaan-laghari-86a7a5233/</a>
            </li>
            <li className="my-2">
            <i className="fa-brands fa-github text-dark-subtle"></i>
            <a href="https://github.com/AmaanLaghari1" className="text-decoration-none mx-2">https://github.com/AmaanLaghari1</a>
            </li>
          </ul>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default Contact