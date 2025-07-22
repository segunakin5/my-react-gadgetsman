import { getAllProducts } from '../data/mock_db';
import { useState } from 'react';

function Shop() {
 
  const [products] = useState(getAllProducts());

  return (
    <div className="shop-container">
      <h1 className="shop-title">Welcome to the Shop</h1>

      <div className="product-list-shop">
        {products.map(product => (
          <div key={product.productId} className="product-card-shop">
            <img src={product.productImage} alt={product.productName} className="product-image" />
            <h2 className="product-name-shop">{product.productName}</h2>
            <p className="product-price-shop">{product.productPrice}</p>
            <button className="buy-button-shop">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
