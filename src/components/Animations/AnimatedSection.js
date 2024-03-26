import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function AnimatedSection(props) {
  const [isSectionInView, setIsSectionInView] = useState(false);
  const animationControls = useAnimation();

  const handleScroll = () => {
    const section = document.getElementById(props.id);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const windowTop = window.pageYOffset;
      const windowBottom = windowTop + window.innerHeight;

      if (sectionTop < windowBottom && sectionBottom > windowTop) {
        setIsSectionInView(true);
      } else {
        setIsSectionInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSectionInView) {
      animationControls.start({ opacity: 1, background: "#fff", transition: { duration: 1, ease: "easeIn" } });
    } else {
      animationControls.start({ opacity: 0, background: "#34A" });
    }
  }, [isSectionInView, animationControls]);

  return (
    <motion.div
      initial={{ opacity: 0, x:0}}
      animate={animationControls}
      id={props.id}
      style={{position: "relative"}}
    >
      {props.children}
    </motion.div>
  );
}

export default AnimatedSection;
