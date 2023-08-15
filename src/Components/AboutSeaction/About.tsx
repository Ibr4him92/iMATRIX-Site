import "./about.css";

interface Props {
  imgSrc: string;
}

const About = ({ imgSrc }: Props) => {
  return (
    <div className="about">
      <div className="main-heading">
        <h2 data-aos="fade-in">About Seaction</h2>
        <p data-aos="fade-out">
          The hard work in trading comes in the preparation. The actual process
          of trading, however, should be effortless.
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
            account for a duo not less than two weeks and not more than a month,
            and then starting a money market trip, through which you will pay
            the company through your circulation and your work weekly, monthly
            or daily until the payment of the (180) JOD
          </p>
        </div>
        <div className="item">
          <img src={imgSrc} data-aos="fade-out" />
        </div>
      </div>
    </div>
  );
};

export default About;
