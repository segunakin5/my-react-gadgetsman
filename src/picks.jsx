import { Link } from 'react-router-dom';

function Picks(props) {
return (
 <section className="picks-container-section" style={props.style}>
   <div className="picks-title-header">
     <h2 style={props.titleStyle}>
       &ldquo;{props.title || "HOT PICKS JUST FOR YOU"}&rdquo;
     </h2>
   </div>

   <div className="picks-cards-container">
     
     <Link to="/product/iphone13" style={{ textDecoration: 'none', color: 'inherit' }}>
       <div className="picks-card-grid">
         <div className="picks-card-image">
           <img src="public/picks1.png" alt="iPhone 13" />
         </div>
         <button className="picks-card-button">Buy Now</button>
         <p className="picks-card-text">Apple iPhone 13  256GB</p>
         <p className="picks-card-price">&#8358;595,000.00</p>
       </div>
     </Link>

     <Link to="/product/samsungs21" style={{ textDecoration: 'none', color: 'inherit' }}>
       <div className="picks-card-grid">
         <div className="picks-card-image">
           <img src="public/samsungs21.jpg" alt="Samsung S21" />
         </div>
         <button className="picks-card-button">Buy Now</button>
         <p className="picks-card-text">Samsung s21 Ultra 5G, 256GB</p>
         <p className="picks-card-price">&#8358;585,000.00</p>
       </div>
     </Link>

     <Link to="/product/googlep9" style={{ textDecoration: 'none', color: 'inherit' }}>
       <div className="picks-card-grid">
         <div className="picks-card-image">
           <img src="public/googlep9.jpg" alt="Google Pixel" />
         </div>
         <button className="picks-card-button">Buy Now</button>
         <p className="picks-card-text">Google Pixel 9 Pro 512GB</p>
         <p className="picks-card-price">&#8358;1,798,000.00</p>
       </div>
     </Link>

     <Link to="/product/airpodpromax" style={{ textDecoration: 'none', color: 'inherit' }}>
       <div className="picks-card-grid">
         <div className="picks-card-image">
           <img src="public/airpodpromax.png" alt="Airpods Max" />
         </div>
         <button className="picks-card-button">Buy Now</button>
         <p className="picks-card-text">Air Pod Max</p>
         <p className="picks-card-price">&#8358;800,000.00</p>
       </div>
     </Link>

   </div>
 </section>
);
}

export default Picks;