import "./footer.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  BsWhatsapp,
  BsFacebook,
  BsTwitter,
  BsTelephoneFill,
  BsFillClockFill,
} from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <h1 data-aos="fade-in">iMATRIX</h1>
          <p data-aos="fade-out">
            It's not whether you're right or wrong that's important, it's how
            much money you make when you're right and how much you lose when
            you're wrong.
          </p>
          <div className="social">
            <BsFacebook data-aos="fade-in" id="facebook" />
            <BsWhatsapp data-aos="fade-in" id="whatsapp" />
            <BsTwitter data-aos="fade-in" id="twitter" />
          </div>
        </div>
        <div className="box">
          <ul>
            <li data-aos="fade-out"> Articles About Trading</li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />{" "}
              <a href="#">Treat Trading Like a Business</a>
            </li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />
              <a href="#">Use Technology to Your Advantage</a>
            </li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />
              <a href="#"> Protect Your Trading Capital</a>
            </li>
            <li>
              <AiOutlineDoubleRight id="right-arrow" />
              <a href="#">Become a Student of the Markets</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <p data-aos="fade-in">
            <BsTelephoneFill id="phone" /> Our PhoneNumbers:
            <br /> <span>715-597-3894</span>
            <br />
            520-797-5183
          </p>
          <p data-aos="fade-in">
            <MdLocationPin id="location" />
            Our Location: <br /> <span>Jordan , Ammnan</span>
          </p>
          <p data-aos="fade-in">
            <BsFillClockFill id="clock" /> Work Time:
            <br />
            <span>24 Hours</span>
          </p>
        </div>
      </div>
      <p className="p1">
        Made By <a href="">Ibr4him_92</a>
      </p>
    </footer>
  );
};

export default Footer;
