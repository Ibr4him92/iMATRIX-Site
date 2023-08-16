import "./login.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="overlay" />
        <div className="container">
          <div className="col">
            <h1>Login Page</h1>
            <div className="email">
              <label>
                Email <MdOutlineMailOutline className="email-icon" />
              </label>
              <br />
              <input type="email" placeholder="Email" />
            </div>
            <div className="password">
              <label>
                Password <RiLockPasswordLine className="pass-icon" />
              </label>
              <br />
              <input type="password" placeholder="Password" />
            </div>
            <button>Submit</button>
            <p className="register">
              Don't have account ? <a href="">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
