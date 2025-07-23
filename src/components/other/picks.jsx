import { Link } from 'react-router-dom';
import { getProductById } from '../../data/mock_db';

function Picks(props) {
 
  const picksProducts = [
    getProductById('6'), 
    getProductById('7'), 
    getProductById('8'), 
    getProductById('9')  
  ].filter(Boolean); 

  return (
    <section className="picks-container-section" style={props.style}>
      <div className="picks-title-header">
        <h2 style={props.titleStyle}>
          &ldquo;{props.title || "HOT PICKS JUST FOR YOU"}&rdquo;
        </h2>
      </div>

      <div className="picks-cards-container">
            {picksProducts.map((product) => (
            <Link key={product.productId} 
            to={`/product/${product.productId}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}>



            <div className="picks-card-grid">
              <div className="picks-card-image">
                <img src={product.productImage} alt={product.productName} />
              </div>
              <button className="picks-card-button">Buy Now</button>
              <p className="picks-card-text">{product.productName}</p>
              <p className="picks-card-price">{product.productPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Picks;