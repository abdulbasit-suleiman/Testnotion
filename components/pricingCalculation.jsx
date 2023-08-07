'use client'
import ChargingDemo from "./chargingDemo";
import PriceClculationMap from "./priceCalculationMap";

function PricingCalculation() {
  return (
    <>
      <div className="calculator-container">
        <div>
          <h1>pricing</h1>
          <span> No subscriptions, No recurring charges.</span>
          <span> Buy units only when you need them.</span>
        </div>
        <div className="calculator-table">
          <p>Special Packages</p>
          <span style={{ justifyContent: "space-between" }}>
            100 Units<span style={{ color: "blue" }}>NGN 3,600.00</span>
          </span>
          <span style={{ justifyContent: "space-between" }}>
            200 Units<span style={{ color: "blue" }}>NGN 7,200.00</span>
          </span>
          <span style={{ justifyContent: "space-between" }}>
            300 Units<span style={{ color: "blue" }}>NGN 10,800.00</span>
          </span>
          <span style={{ justifyContent: "space-between" }}>
            500 Units<span style={{ color: "blue" }}>NGN 18,000.00</span>
          </span>
          <span style={{ justifyContent: "space-between" }}>
            1000 Units<span style={{ color: "blue" }}>NGN 36,000.00</span>
          </span>
        </div>
        <div className="price-conversion">
          <div >
            <p className="orange-p">
              Purchasing Units outside the packages above,
              <span className="orange-price">1 Unit cost NGN 40.00</span>
            </p>
            <p className="unit">Unit Calculator</p>
          </div>
            <div>
          <PriceClculationMap />
            </div>
        </div>
        <ChargingDemo />
      </div>
    </>
  );
}
export default PricingCalculation;
