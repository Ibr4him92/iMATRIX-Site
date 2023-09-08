/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
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

  const [openSelectedList, setOpenSelectedList] = useState(false);

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
            onOpenList={() => setOpenSelectedList(true)}
            {...(openSelectedList == true
              ? { childern: "-show" }
              : { childern: "" })}
            onCloseList={() => setOpenSelectedList(false)}
            {...(openSelectedList === true
              ? { disapperBar: "none-bar" }
              : { disapperBar: "un-bar" })}
          />
          <Landing
            goDown={() => scrollToSection(contract)}
            {...(openSelectedList === true
              ? {
                  disapperH1: "none-h1",
                  disapperP: "none-p",
                  disapperBtn: "none-btn",
                }
              : {
                  disapperH1: "un-h1",
                  disapperP: "un-p",
                  disapperBtn: "un-btn",
                })}
          />
        </div>
      </div>
      <About toScroll={about} />
      <Contract toScroll={contract} />
      <Video toScroll={videoSection} />
      <Contact toScroll={contact} />
      <Footer toScroll={footer} />
    </>
  );
};

export default App;
