import PricingCalculation from "./pricingCalculation";

function PricingPage() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Plans & Pricing</h2>
      <p className="pricing-paragraph">You are being charged per candidate</p>
      <div className="price-holder">
        <div className="price-div">
          <img
            src="/asset/price1.svg"
            className="price-svg"
            width={120}
            height={120}
            alt="Price 1"
          />
          <p className="tariff1">P.A.Y.G</p>
          <ul>
            <li>
              <img src="/asset/blue.svg" /> One-off usage
            </li>
            <li>
              <img src="/asset/blue.svg" /> Candidate only eligible to take 1
              exam
            </li>
            <li>
              <img src="/asset/blue.svg" /> Charges 6.25 Unit per candidate
            </li>
          </ul>
        </div>
        <img className="price-divider" src="/asset/price.svg" alt="Price Divider" />
        <div className="price-div">
          <img
            src="/asset/price2.svg"
            className="price-svg"
            width={120}
            height={120}
            alt="Price 2"
          />
          <p className="tariff2">STANDARD</p>
          <ul>
            <li>
              <img src="/asset/blue.svg" /> Multiple times usage per month
            </li>
            <li>
              {" "}
              <img src="/asset/blue.svg" /> Candidates can take up to 10 exams
              (+3 free if the 10 has been exhausted) per month
            </li>
            <li>
              <img src="/asset/blue.svg" /> Charges 10 Units per candidate per
              month
            </li>
          </ul>
        </div>
      </div>
      <p className="something-different">Having something different in mind?</p>
      <button class="start-btn">Talk To Us</button>
      <PricingCalculation />
    </div>
  );
}

export default PricingPage;
