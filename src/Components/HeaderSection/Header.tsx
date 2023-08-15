import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import "./header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <span>i</span>MATRIX
        </div>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contract</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
