import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import "./header.css";
interface Props {
  onScrollAbout: () => void;
  onScrollContract: () => void;
  onScrollVideo: () => void;
  onScrollContact: () => void;
}

const Header = ({
  onScrollAbout,
  onScrollContact,
  onScrollContract,
  onScrollVideo,
}: Props) => {
  const handleLinkClick = (e: React.MouseEvent, scrollFunction: () => void) => {
    e.preventDefault();
    scrollFunction();
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <span>i</span>MATRIX
        </div>
        <ul>
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => handleLinkClick(e, onScrollAbout)}>
              About
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => handleLinkClick(e, onScrollContract)}>
              Contract
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => handleLinkClick(e, onScrollVideo)}>
              Videos
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => handleLinkClick(e, onScrollContact)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="bar">
          <FaBars />
          <div className="list">
            <div className="close">
              <AiFillCloseCircle />
            </div>
            <ul className="list-item">
              <li>Home</li>
              <li>About</li>
              <li>Videos</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
