import React, { useState, useEffect } from "react";

const Header = (props) => {
  let navlist = [
    {
      title: 'Home',
      id: '#Home'
    },
    {
      title: 'About',
      id: '#About'
    },
    {
      title: 'Projects',
      id: '#Projects'
    },
    {
      title: 'Expertise',
      id: '#Expertise'
    },
    {
      title: 'Contact',
      id: '#Contact'
    }
  ]
  const sections = ['Home', 'About', 'Projects', 'Expertise', 'Contact'];
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Calculate the heights and positions of your sections and update the active section accordingly
    const sectionOffsets = sections.map(section => ({
      section,
      offsetTop: document.getElementById(section).offsetTop,
      height: document.getElementById(section).clientHeight
    }));

    const newActiveSection = sectionOffsets.find(
      ({ offsetTop, height }) => scrollPosition >= offsetTop && scrollPosition < offsetTop + height
    );

    if (newActiveSection) {
      setActiveSection(newActiveSection.section);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the 'active' class to the active section
    navlist.forEach(section => {
      const sectionElement = document.querySelector("a[href='"+section.id+"']");
      if (section.title === activeSection) {
        sectionElement.classList.add('active');
      } else {
        sectionElement.classList.remove('active');
      }
    });
  }, [activeSection]);

  const navHandler = () => {
    if(window.scrollY > 200){
      document.querySelector('nav').classList.add('fixed-top')
    }
    else {
      document.querySelector('nav').classList.remove('fixed-top')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', navHandler)
  },[])
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-1">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder px-4 text-primary" href="/">
          AKL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <i className="fa-solid fa-bars" style={{color: "#000000"}}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
              navlist.map((item, index) => {
                return (
                  <li className="nav-item" key={`key-${index}`}>
                    <a className="nav-link mx-3" aria-current="page" href={item.id}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
