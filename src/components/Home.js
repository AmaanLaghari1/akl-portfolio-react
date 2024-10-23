import React from "react";
import "./Home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import Animate from "../Animate";


const Home = (props) => {
  return (
    <div className="container-fluid p-0 text-center position-relative">

    <Swiper
    style={{height: '100vh'}}
    slidesPerView={1}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    loop={true}
    effect="fade"
    modules={[Autoplay, EffectFade]}
    >
      <SwiperSlide>
        <img src={require("../images/developer3.jpg")} alt="" className="h-100 w-100" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../images/developer.jpg")} alt="" className="h-100 w-100" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../images/developer2.jpeg")} alt="" className="h-100 w-100" />
      </SwiperSlide>
    </Swiper>
    
        <section id="Home"
          className="d-flex align-content-center justify-content-center flex-column"
        >
        <div className="text-center w-100">
        <Animate duration={2}>
          <h1 className="display-3 fw-bold">{props.title}</h1>
          <p className="fw-semibold lead">
            Software Developer specialized in Web Programming
          </p>
          <a href={require('../images/resume101420241334.pdf')} class="hero-btn text-light text-decoration-none" download="akl-resume">Download Resume <i style={{marginLeft: ".2rem"}} className="fa-regular fa-circle-down"></i></a>
        </Animate>
        </div>
        </section>
      </div>
  );
};

export default Home;
