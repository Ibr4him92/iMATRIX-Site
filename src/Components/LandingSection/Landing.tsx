import "./landing.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
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
            <a href="https://www.facebook.com/profile.php?id=100094598252430">
              <BsFacebook id="facebook" />
            </a>
            <a href="https://www.instagram.com/i.m.a.t.r.i.x/">
              <BsInstagram id="instagram" />
            </a>
            <a href="https://t.me/iMATRIX_escaping">
              <FaTelegram id="telegram" />
            </a>
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
