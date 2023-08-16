import "./contract.css";
import ContractImage from "./img/ContractImage.jpg";

interface Props {
  toScroll: React.MutableRefObject<null>;
}

const Contract = ({ toScroll }: Props) => {
  return (
    <div className="contract" ref={toScroll}>
      <div className="main-heading">
        <h2 data-aos="fade-in">Contract Seaction</h2>
        <p data-aos="fade-out">
          It's not whether you're right or wrong that's important, it's how much
          money you make when you're right and how much you lose when you're
          wrong.
        </p>
      </div>
      <div className="container">
        <div className="col">
          <h1 data-aos="fade-in">Here is some Condations of the contract :-</h1>
          <div className="item-one">
            <h3 data-aos="fade-out">Duration of the contract :</h3>
            <p data-aos="fade-out">
              The contract is for a maximum of one year and less than a day from
              the time the real account starts.
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
              [2] The upper limit of time to pay off a portion of the company's
              debt is a month.
            </p>
            <p data-aos="fade-out">
              [3] Minimum payment in one month is 15 JOD.
            </p>
          </div>
          <h2 data-aos="fade-out">For More Details Contact Us!!</h2>
        </div>
        <div className="item">
          <img src={ContractImage} data-aos="fade-out" />
        </div>
      </div>
    </div>
  );
};

export default Contract;
