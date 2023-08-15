/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Components/HeaderSection/Header";
import Landing from "./Components/LandingSection/Landing";
import About from "./Components/AboutSeaction/About";
import Contract from "./Components/ContractSeaction/Contract";
import Video from "./Components/VideosSection/Video";
import Contact from "./Components/ContactSection/Contact";
import Footer from "./Components/FooterSection/Footer";

const App = () => {
  //Animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-img">
        <div className="overlay">
          <Header />
          <Landing />
        </div>
      </div>
      <About imgSrc="../public/AboutImage.png" />
      <Contract imgSrc="../public/ContractImage.jpg" />
      <Video imgSrc="../public/videoImage.jpg" />
      <Contact imgSrc="../public/contact.svg" />
      <Footer />
    </>
  );
};

export default App;
