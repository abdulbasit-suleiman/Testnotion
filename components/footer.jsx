function Footer() {
  return (
<div className="footer-div">    
<div className="footer-container">
      <div className="left-footer">
        <h2>TestNotion</h2>
        <p>
          The one tool to prepare, conduct,
           and auto-grade tests. Easy and 
          fast.
        </p>
      </div>
      <div className="social-media">
        <h2>Social media</h2>
        <div className="media-list">
          <ul>
            <li>
              <button>
                <img src="/asset/facebook.svg" />
              </button>
            </li>
            
            <li>
              <button>
                <img src="/asset/twitter.svg" />
              </button>
            </li>
            <li>
              <button>
                <img src="/asset/instagram.svg" />
              </button>
            </li>
            <li>
              <button>
                <img src="/asset/linkedin.svg" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Benefits</li>
          <li>Testimonials</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
<span className="copyWrite">© TestNotion 2023  <span className="link"> Terms & Condition </span>   <span className="link"> Privacy</span></span>
    </div>
  );
}
export default Footer;
