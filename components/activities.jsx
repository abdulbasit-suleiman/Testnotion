"use client";

import { ActivitiesData } from "./activitiesDataLeft";

function Activities() {
  return (
    <div className="activities-holder">
       <div className="activities-div">
   {ActivitiesData.map((val, ind) => (
     <div
       className="activities-container"
       key={ind}
       style={{ background: val.bgColor, marginTop: val.marginTop }}
     >
       <div className="extra-div">
         <p
           style={{ padding: "3rem" }}
           dangerouslySetInnerHTML={{ __html: val.image }}
         ></p>
         <p className="activity-paragraph">{val.text}</p>
         <div className="hr"></div>
         
         <ul className="act-list">
           {" "}
           {val.list
             .split("<li>")
             .map(
               (item, index) =>
                 item && <li key={index}>{item.replace("</li>", "")}</li>
             )}
         </ul>
       </div>
     </div>
   ))}
 </div>
 </div>
  );
}

export default Activities;
