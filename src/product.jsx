import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  

  let productName = "Product: " + id;
  let productPrice = "₦500,000.00";
  let productDescription = "Great product!";
  let productImage = `/${id}.png`;

  if (id === "iphone13") {
    productName = "Apple iPhone 13 4GB 256GB";
    productPrice = "₦595,000.00";
    productDescription = "Latest iPhone with amazing camera and performance.";
    productImage = "/picks1.png";
  }

  if (id === "samsungs21") {
    productName = "Samsung s21 Ultra 5G, 256GB";
    productPrice = "₦585,000.00"; 
    productDescription = "Powerful Android phone with great features.";
    productImage = "/samsungs21.jpg";
  }

  if (id === "googlep9") {
    productName = "Google Pixel 9 Pro 512GB";
    productPrice = "₦1,798,000.00";
    productDescription = "Google's flagship with incredible AI features.";
    productImage = "/googlep9.jpg";
  }

  if (id === "airpodpromax") {
    productName = "Air Pod Max";
    productPrice = "₦800,000.00";
    productDescription = "Premium headphones with superior sound quality.";
    productImage = "/airpodpromax.png";
  }

  return (
    <section className="product-page-container">
      <div className="product-card">
        <div className="product-image">
          <img src={productImage} alt={productName} />
        </div>

        <div className="product-details">
          <h1 className="product-title">{productName}</h1>
          <p className="product-price">{productPrice}</p>
          <p className="product-description">{productDescription}</p>

          <div className="product-quantity">
            <label>Quantity:</label>
            <button className="quantity-button-left" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button  className="qunatity-button-right" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="wishlist-btn"> Add to Wishlist</button>
        </div>
      </div>
    </section>
  );
}

export default Product;