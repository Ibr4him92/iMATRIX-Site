import "./footer.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
  BsFillClockFill,
} from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

interface Props {
  toScroll: React.MutableRefObject<null>;
}

const Footer = ({ toScroll }: Props) => {
  return (
    <footer ref={toScroll}>
      <div className="container">
        <div className="box">
          <h1 data-aos="fade-in">iMATRIX</h1>
          <p data-aos="fade-out">
            It's not whether you're right or wrong that's important, it's how
            much money you make when you're right and how much you lose when
            you're wrong.
          </p>
          <div className="social">
            <a href="https://t.me/iMATRIX_escaping">
              <FaTelegram data-aos="fade-in" id="telegram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094598252430">
              <BsFacebook data-aos="fade-in" id="facebook" />
            </a>
            <a href="https://www.instagram.com/i.m.a.t.r.i.x/">
              <BsInstagram data-aos="fade-in" id="instagram" />
            </a>
          </div>
        </div>
        <div className="box">
          <ul>
            <li data-aos="fade-out"> Articles About Trading</li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />{" "}
              <a href="https://www.investopedia.com/articles/trading/10/top-ten-rules-for-trading.asp#toc-rule-3-use-technology-to-your-advantage">
                Treat Trading Like a Business
              </a>
            </li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />
              <a href="https://www.investopedia.com/articles/trading/10/top-ten-rules-for-trading.asp#toc-rule-4-protect-your-trading-capital">
                Use Technology to Your Advantage
              </a>
            </li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />
              <a href="https://www.investopedia.com/articles/trading/10/top-ten-rules-for-trading.asp#toc-rule-5-become-a-student-of-the-markets">
                {" "}
                Protect Your Trading Capital
              </a>
            </li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />
              <a href="https://www.investopedia.com/articles/trading/10/top-ten-rules-for-trading.asp#toc-rule-6-risk-only-what-you-can-afford-to-lose">
                Become a Student of the Markets
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <p data-aos="fade-in">
            <BsTelephoneFill id="phone" /> Our PhoneNumbers:
            <br /> <span>+962799135206</span>
            <br />
            +962797986702
          </p>
          <p data-aos="fade-in">
            <MdLocationPin id="location" />
            Our Location: <br /> <span>Jordan , Amman</span>
          </p>
          <p data-aos="fade-in">
            <BsFillClockFill id="clock" /> Work Time:
            <br />
            <span>24 Hours</span>
          </p>
        </div>
      </div>
      <p className="p1">
        Made By <a href="https://www.instagram.com/debugger_92/">Debugger</a>
      </p>
    </footer>
  );
};

export default Footer;
