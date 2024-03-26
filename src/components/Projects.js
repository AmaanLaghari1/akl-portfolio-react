import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Projects = (props) => {
  let projects = [
    {
      title: "News Blogger",
      desc: "Blogging application capable of managing news blog posts.",
      implementation:
        "HTML5, CSS3, Bootstrap5, JavaScript, AJAX, PHP, MySQL.",
      thumbnail: require("../images/news-blogger-app-thumbnail.PNG"),
      github: "https://github.com/AmaanLaghari1/news-blogger.git"
    },
    {
      title: "Sasta Bazaar",
      desc: "Online ecommerce store capable buying and selling goods or sevices.",
      implementation:
        "HTML5, CSS3, Bootstrap5, JavaScript, Swiper.css, Python Django, SQLite.",
      thumbnail: require("../images/Sasta_Bazaar.PNG"),
      github: "https://github.com/AmaanLaghari1/SastaBazaar-App"
    },
    {
      title: "Tradistans",
      desc: "Trading company's frontend website.",
      implementation: "HTML5, CSS3, Bootstrap5, JavaScript, jQuery.",
      thumbnail: require("../images/Tradistans.PNG"),
      github: "https://github.com/AmaanLaghari1/Tradistans/tree/main"
    },
    {
      title: "Netflix Clone",
      desc: "Netflix website landing page clone designed using bootstrap.",
      implementation: "HTML5, CSS3, Bootstrap5",
      thumbnail: require("../images/Netflix.PNG"),
      github: "https://github.com/AmaanLaghari1/netflix-clone"
    },
    {
      title: "Travel",
      desc: "Travel company frontend landing page design.",
      implementation: "HTML5, CSS3, Swiper.css",
      thumbnail: require("../images/Travel.PNG"),
      github: "https://github.com/AmaanLaghari1/netflix-clone"
    },
  ];
  return (
    <section id="Projects" className="container-fluid bg-dark p-5">
      <div className="container position-relative">
        <h3 className="my-4 text-light">
          My Projects
        </h3>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={10}
          slidesPerView={2}
          grabCursor={true}
          scrollbar={{draggable: false}}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: true,
          // }}
          pagination={{
            clickable: true,
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {projects.map((item, index) => {
            return (

              <SwiperSlide style={{width: '50%'}} key={`key-${index}`}>
                <div
                  className="card position-relative w-100 shadow-lg p-3 mb-1 rounded"
                  style={{ height: "30rem", background: 'linear-gradient(rgba(250, 250, 250, .9), rgba(250, 250, 250, .9))' }}
                >
                  <img
                    src={item.thumbnail}
                    alt="Project thumbnail"
                    className="card-img-top w-100"
                    style={{ height: "16rem" }}
                  />
            
                  <div className="card-body position-relative">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="card-text small">{item.desc}</div>
                    <p className="small" style={{fontSize: "1rem"}}>
                      Implementation: {item.implementation}
                    </p>
                    <a href={item.github} target="_blank" className="d-block text-decoration-none position-absolute bottom-0">View Github <i className="fa-solid fa-right-from-bracket"></i></a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
