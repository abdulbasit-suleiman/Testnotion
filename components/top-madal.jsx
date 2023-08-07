import HeaderTop from "./header-top"
function Topmodal({ onClose }){
    return(
                <div className="mobile-link">
                    <span className='cancel' onClick={onClose}><p>x</p></span>
        <div>
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
          <span className="mobile-login">
          <button className="mobile-in-btn">Sign in</button>
        <button className="mobile-up-btn">Sign up</button>
            </span>
          </div>
        </div>
    )
}
export default Topmodal