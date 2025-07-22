function NewsLetter(){
  return(
    <div className="newsletter-container"> 
      <div className="newsletter-image">
        <img src="../../public/assets/newsletter.png" alt="Newsletter" />  
      </div>
      <div className="newsletter-content">
        <div className="vertical-rectangle"></div>
        <h1>Stay In The Loop with <span>GADGETSMANHUB</span></h1>
        
        <p className="intro-text">
          Get the latest updates, tech insights, and exclusive offers from GADGETSMANHUB delivered straight to your inbox. Our monthly newsletter keeps you informed about the newest gadgets, upcoming product releases, special promotions, and expert tech tips to help you stay ahead of the curve.
        </p>
        
        <p className="secondary-text">
          Join thousands of tech enthusiasts who trust GADGETSMANHUB to deliver valuable content that matters to their digital lifestyle. From cutting-edge gadget launches to industry trends, we curate the most relevant tech information so you don't have to.
        </p>
        
        <p className="subscribe-text">
          Subscribe to GADGETSMANHUB updates and never miss out on:
        </p>
        
        <ul className="feature-list">
          <li>New gadget arrivals and product features</li>
          <li>Exclusive subscriber-only tech deals</li>
          <li>Industry news and innovation insights</li>
          <li>Expert gadget reviews and recommendations</li>
          <li>Early access to sales and new releases</li>
        </ul>
        
        <p className="closing-text">
          Ready to stay connected with the latest in tech? Enter your email below and become part of the GADGETSMANHUB community.
        </p>
      </div>
      <button className="newsletter-button">Join our community</button>
    </div>
  )
}

export default NewsLetter;