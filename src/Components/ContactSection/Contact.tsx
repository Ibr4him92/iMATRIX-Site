import "./contact.css";

interface Props {
  imgSrc: string;
  toScroll: React.MutableRefObject<null>;
}

const Contact = ({ imgSrc, toScroll }: Props) => {
  return (
    <div className="contact" ref={toScroll}>
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
          <img src={imgSrc} data-aos="fade-out" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
