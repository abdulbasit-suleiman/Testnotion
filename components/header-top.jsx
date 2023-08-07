import { useState } from "react"
import Topmodal from "./top-madal";
const HeaderTop = () => {
  const [modalOpen,setModalOpen]=useState(false)
  return (
    <div className="header-top">
      <div className="left-header-top">
        <img className="logo" src="/asset/logo.jpg" alt="" />
          <div className="header-list">
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Partner</li>
              <li>
                Support
                <select className="options">
                  <option></option>
                  <option></option>
                </select>
              </li>
            </ul>
          </div>
      </div>
      <div className="right-header-top">
        <button className="sign-in-btn">Sign in</button>
        <button className="sign-up-btn">Sign up</button>
        <img src="/asset/darkMode.svg" className="menu-svg2" />
        <img src="/asset/menu.svg"  onClick={()=>setModalOpen(true)}  className="menu-svg" />
       {modalOpen && 
           <Topmodal onClose={()=>setModalOpen(false)} />
      }
       
      </div>

    </div>
  );
};

export default HeaderTop;
