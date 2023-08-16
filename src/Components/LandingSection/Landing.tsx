import "./landing.css";
import { BsWhatsapp, BsFacebook, BsTwitter } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

interface Props {
  goDown: () => void;
  disapperH1?: string | undefined;
  disapperP?: string | undefined;
  disapperBtn?: string | undefined;
}
const Landing = ({ goDown, disapperH1, disapperP, disapperBtn }: Props) => {
  return (
    <div className="landing">
      <div className="container">
        <div className="col">
          <h1 className={disapperH1}>
            Welcome, To The <span> World Of Money !!</span>
          </h1>
          <p className={disapperP}>
            If most traders would learn to sit on their hands 50 percent of the
            time, they would make a lot more money.
          </p>
          <div className="btn">
            <a href="/login">
              <button className={disapperBtn}>Get Started</button>
            </a>
          </div>
          <div className="social">
            <BsFacebook id="facebook" />
            <BsWhatsapp id="whatsapp" />
            <BsTwitter id="twitter" />
          </div>
          <div className="go-down">
            {/* onclick="ScrollToAbout()" */}
            <MdOutlineKeyboardDoubleArrowDown onClick={goDown} id="go-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
