
function Footer(){
return(
    <footer className="footer-container">
    
        
      <div className="footer-content-left">
          <div className="logo-and-input">
            <h2>GADGETSMAN<span>HUB</span></h2>
            <p>
              Gadgetsmanhub is your go-to destination for cutting-edge gadgets and innovative tech solutions. 
              From smartphones to smart home devices, we offer the latest technology to enhance your digital lifestyle.
            </p>
          </div>
          
        <div className="field">
            <div className="email-input-group">

              <input 
                type="email" 
                placeholder="Type your email address"
                className="email-input"/>

            </div>
            <button className="submit-btn">
              Submit
            </button>
        
          </div>

      </div>




        
      <div className="footer-content-middle">
          <div className="contact-item">
            <div className="contact-icon phone-icon"></div>
            <span>+2348185921311</span>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon location-icon"></div>
            <span>Shop B, Platinum Plaza, adepele street computer village</span>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon email-icon"></div>
            <span>Gadgetsmanhub@gmail.com</span>
          </div>
      </div>






        
      <div className="footer-content-right">
          
          <div className="footer-column">
            <h3 className="column-title">POPULAR</h3>
            <ul className="column-links">
              <li><a href="#">Phones</a></li>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Gaming</a></li>
              <li><a href="#">PC</a></li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3 className="column-title">MENU</h3>
            <ul className="column-links">
              <li><a href="#">All Category</a></li>
              <li><a href="#">New Latest</a></li>
              <li><a href="#">Special Events</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Feedbacks</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3 className="column-title">OTHER</h3>
            <ul className="column-links">
              <li><a href="#">Tracking Package</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
        
      </div>

    

    

    
    </footer>
  );
};




export default Footer;