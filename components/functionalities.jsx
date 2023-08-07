import { functionData } from "./functionData";

function Functionionalities() {
  return (
      <div className="function-div">
        {functionData.map((val, index) => (
          <div className="functionalities" key={index}>
            <div dangerouslySetInnerHTML={{ __html: val.image }} />
            <br />
            <div>{val.service}</div>
          </div>
        ))}
      </div>
  );
}
export default Functionionalities;
