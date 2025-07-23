import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../data/mock_db';

function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  
  // Fix: Use useEffect to avoid infinite re-renders
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
    }
  }, [id]);

  // Show loading state if product hasn't loaded yet
  if (!product) {
    return <div>Loading...</div>;
  }
  
  return (
    <section className="product-page-container">
      <div className="product-card">
        <div className="product-image">
          <img src={product.productImage} alt={product.productName} />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.productName}</h1>
          <p className="product-price">{product.productPrice}</p>
          <p className="product-description">{product.productDescription}</p>

          <div className="product-quantity">
            <label>Quantity:</label>
            <button className="quantity-button-left" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button className="quantity-button-right" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="wishlist-btn">Add to Wishlist</button>
        </div>
      </div>
    </section>
  );
}

export default Product;