import Header from "./components/header/Header";
import Aboutme from "./components/Aboutme";
import { useEffect, useRef } from "react";
import "./App.css";
import Skillbars from "./components/Skillbars";
import topPhoto from "./images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg";
import Photowithtext from "./components/Photowithtext";
import laptopImage from "./images/laptop_code_programming_212332_1440x900.jpg";
import ProjectsSlider from "./components/ProjectsSlider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const ContactRef = useRef(null);

  const aboutMehandler = () => {
    aboutMeRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  const projectsHandler = () => {
    projectRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactHandler = () => {
    ContactRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlers = [aboutMehandler, projectsHandler, contactHandler];

  useEffect(() => {
    const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
    const hiddenElementsRight = document.querySelectorAll(".hidden-right");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    hiddenElementsLeft.forEach((el) => observer.observe(el));
    hiddenElementsRight.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <>
        <Header handlers={handlers} />
        <Photowithtext
          image={topPhoto}
          headline="Irakli Pankvelashvili"
          subtext="Portfolio"
        />
        <section ref={aboutMeRef} className="fullscreen-aboutMe">
          <Aboutme />
          <Skillbars />
        </section>
        <Photowithtext
          image={laptopImage}
          headline="Project"
          style={{ marginTop: 0 }}
        />
        <ProjectsSlider ref={projectRef} />
        <Contact ref={ContactRef} />
        <Footer />
      </>
    </div>
  );
}

export default App;
