/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaRandom } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  BsWhatsapp,
  BsFacebook,
  BsTwitter,
  BsTelephoneFill,
  BsFillClockFill,
} from "react-icons/bs";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdLocationPin,
} from "react-icons/md";
import Header from "./Components/HeaderSection/Header";

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
          <div className="landing">
            <div className="container">
              <div className="col">
                <h1 data-aos="fade-in">
                  Welcome, To The <span> World Of Money !!</span>
                </h1>
                <p>
                  If most traders would learn to sit on their hands 50 percent
                  of the time, they would make a lot more money.
                </p>
                <div className="btn">
                  <button data-aos="fade-out">Get Started</button>
                </div>
                <div className="social">
                  <BsFacebook id="facebook" />
                  <BsWhatsapp id="whatsapp" />
                  <BsTwitter id="twitter" />
                </div>
                <div className="go-down">
                  {/* onclick="ScrollToAbout()" */}
                  <MdOutlineKeyboardDoubleArrowDown id="go-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- About Section -*/}
      <div className="about">
        <div className="main-heading">
          <h2 data-aos="fade-in">About Seaction</h2>
          <p data-aos="fade-out">
            The hard work in trading comes in the preparation. The actual
            process of trading, however, should be effortless.
          </p>
        </div>
        <div className="container">
          <div className="col">
            <h1 data-aos="fade-in">All You Want To Know About iMATRIX</h1>
            <h3 data-aos="fade-out">Definition of the service :</h3>
            <p data-aos="fade-out">
              In trading companies, the client is known to pay for the course,
              take education from the platform, and start trading with a capital
              other than the one he paid for the course.
            </p>
            <p data-aos="fade-out">
              The IMATRIX company has the advantage of providing a creative
              teaching service, offering free education, then training on a mock
              account for a duo not less than two weeks and not more than a
              month, and then starting a money market trip, through which you
              will pay the company through your circulation and your work
              weekly, monthly or daily until the payment of the (180) JOD
            </p>
          </div>
          <div className="item">
            <img src="../public/AboutImage.png" data-aos="fade-out" />
          </div>
        </div>
      </div>
      {/* Contract Section */}
      <div className="contract">
        <div className="main-heading">
          <h2 data-aos="fade-in">Contract Seaction</h2>
          <p data-aos="fade-out">
            It's not whether you're right or wrong that's important, it's how
            much money you make when you're right and how much you lose when
            you're wrong.
          </p>
        </div>
        <div className="container">
          <div className="col">
            <h1 data-aos="fade-in">
              Here is some Condations of the contract :-
            </h1>
            <div className="item-one">
              <h3 data-aos="fade-out">Duration of the contract :</h3>
              <p data-aos="fade-out">
                The contract is for a maximum of one year and less than a day
                from the time the real account starts.
              </p>
            </div>
            <div className="item-two">
              <h3 data-aos="fade-in">
                Conditions and punishment for violation :
              </h3>
              <p data-aos="fade-out">
                [1] The education is completed within the two-week period agreed
                between team one and team two.
              </p>
              <p data-aos="fade-out">
                [2] The upper limit of time to pay off a portion of the
                company's debt is a month.
              </p>
              <p data-aos="fade-out">
                [3] Minimum payment in one month is 15 JOD.
              </p>
            </div>
            <h2 data-aos="fade-out">
              For More Details <a href="">Click Here</a> .
            </h2>
          </div>
          <div className="item">
            <img src="../public/ContractImage.jpg" data-aos="fade-out" />
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="videos" id="videos">
        <div className="main-heading">
          <h2 data-aos="fade-in">Videos Seaction</h2>
          <p data-aos="fade-out">
            If a trader is motivated by the money, then it is the wrong reason.
            A truly successful trader has got to be involved and into the
            trading, the money is the side issue .
          </p>
        </div>
        <div className="container">
          <div className="holder">
            <div className="list">
              <div className="name">
                Videos
                <FaRandom id="random" />
              </div>
              <ul>
                <li>
                  How To Create Sub Domain<span>05:18</span>
                </li>
                <li>
                  Playing With The DNS <span>03:18</span>
                </li>
                <li>
                  Everything About The Virtual Hosts <span>05:25</span>
                </li>
                <li>
                  How To Monitor Your Website <span>04:16</span>
                </li>
                <li>
                  Uncharted Beating The Last Boss <span>07:48</span>
                </li>
                <li>
                  Ys Oath In Felghana Overview <span>03:12</span>
                </li>
                <li>
                  Ys Series All Games Ending <span>08:10</span>
                </li>
              </ul>
            </div>
            <div className="preview">
              <img decoding="async" src="../public/videoImage.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="contact">
        <div className="main-heading">
          <h2 data-aos="fade-in">Contact-Us</h2>
          <p data-aos="fade-out">
            There is the plain fool, who does the wrong thing at all times
            everywhere, but there is the Wall Street fool, who thinks he must
            trade all the time.
          </p>
        </div>
        <div className="container">
          <div className="col">
            <input type="text" placeholder="First Name" data-aos="fade-out" />
            <input type="email" placeholder="Email" data-aos="fade-out" />
            <input
              type="text"
              placeholder="What Do You Need"
              data-aos="fade-out"
            />
            <button data-aos="fade-out">Submit</button>
          </div>
          <div className="item">
            <img src="../public/contact.svg" data-aos="fade-out" />
          </div>
        </div>
      </div>
      {/* Footer Section */}
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
    </>
  );
};

export default App;
