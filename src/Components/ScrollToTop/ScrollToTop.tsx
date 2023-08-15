/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import "./scrollToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";

const scrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShowScroll(true) : setShowScroll(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScroll && (
        <AiOutlineArrowUp className="go-up show" onClick={scrollToTop} />
      )}
    </div>
  );
};

export default scrollToTop;
