/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Header from "./Components/HeaderSection/Header";
import Landing from "./Components/LandingSection/Landing";
import About from "./Components/AboutSeaction/About";
import Contract from "./Components/ContractSeaction/Contract";
import Video from "./Components/VideosSection/Video";
import Contact from "./Components/ContactSection/Contact";
import Footer from "./Components/FooterSection/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  //Animation
  useEffect(() => {
    AOS.init();
  }, []);
  const about = useRef(null);
  const contract = useRef(null);
  const videoSection = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      <div className="bg-img">
        <div className="overlay">
          <Header
            onScrollAbout={() => scrollToSection(about)}
            onScrollContract={() => scrollToSection(contract)}
            onScrollVideo={() => scrollToSection(videoSection)}
            onScrollContact={() => scrollToSection(contact)}
          />
          <Landing goDown={() => scrollToSection(footer)} />
        </div>
      </div>
      <About imgSrc="../public/AboutImage.png" toScroll={about} />
      <Contract imgSrc="../public/ContractImage.jpg" toScroll={contract} />
      <Video imgSrc="../public/videoImage.jpg" toScroll={videoSection} />
      <Contact imgSrc="../public/contact.svg" toScroll={contact} />
      <Footer toScroll={footer} />
    </>
  );
};

export default App;
