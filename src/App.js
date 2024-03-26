import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AnimatedSection from "./components/Animations/AnimatedSection";

function App() {
  return (
    <>
      <Header />
      <Home title="Amaanullah Khan Laghari" />
      <AnimatedSection id="About">
        <About />
      </AnimatedSection>
      <AnimatedSection id="Projects">
      <Projects />
      </AnimatedSection>
      <AnimatedSection id="Expertise">
      <Skills />
      </AnimatedSection>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
