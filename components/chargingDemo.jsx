function ChargingDemo() {
  return (
    <>
      <div className="demo-container">
        <h2>
          <span className="orange-price">
            Exam charging Demo per candidate{" "}
          </span>
          <select className="amountoption">
                <option value="">P.A.Y.G</option> <option value="">STANDARD </option>
              </select>
        </h2>
        <span className="for-service">
          Service
          <span>
            Cost
            <select className="amountoption">
                <option value="">(Amount)</option> <option value="">(Unit)</option>
              </select>
          </span>
        </span>
        <span>Exam<span>10.00 Unit</span></span>
        <span><p><input type="checkbox" />Live Monitoring</p><span>0.00</span></span>
        <span><p><input type="checkbox" />Email Notification</p><span>0.00</span></span>
        <span><p><input type="checkbox" />Video Playback</p><span>0.00</span></span>
        <span className="cost-text"><span>Total Cost</span>10.00 Units</span>
      </div>
    </>
  );
}
// .demo-container>span{
//     display: flex;
//     justify-content: space-between;
//     margin: 2rem 0;
//   }
//   .demo-container>span>select{
//     background: red;
//     height: 12rem;
//   }
//   .cost-text{
//     font-size: 1.4rem;
//     font-weight: bold;
//   }
export default ChargingDemo;
