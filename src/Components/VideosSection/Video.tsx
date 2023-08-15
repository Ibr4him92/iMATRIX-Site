import "./video.css";
import { FaRandom } from "react-icons/fa";
interface Props {
  imgSrc: string;
}
const Video = ({ imgSrc }: Props) => {
  return (
    <div className="videos" id="videos">
      <div className="main-heading">
        <h2 data-aos="fade-in">Videos Seaction</h2>
        <p data-aos="fade-out">
          If a trader is motivated by the money, then it is the wrong reason. A
          truly successful trader has got to be involved and into the trading,
          the money is the side issue .
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
            <img decoding="async" src={imgSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
