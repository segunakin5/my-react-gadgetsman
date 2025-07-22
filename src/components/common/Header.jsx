import { useState } from 'react';

import logo from '../../../public/assets/gadgetsmans-logo.png';

function Header() {


const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const handleDropdownClick = () => {
  if (isDropdownOpen === true) {
    setIsDropdownOpen(false);
  } else {
    setIsDropdownOpen(true);//THIS IS FOR THE DROPDOWN MENU
  }
};

const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (e) => {
  if (e.key === 'Enter') {
    console.log('You searched for:', searchTerm);
    setSearchTerm(''); // THIS IS TO MAKE ENTER KEY WORK WHEN WE SEARCH
  }
};
//THIS  IS A VARIABLE ARRAY OF FAKE PRODUCTS
 /*const  fakeProducts = [
  
  "Samsung S25 Ultra",
  "Infinix Zero 30",
  "Macbook Air M3",
  "Airpods Pro 2",
  "HP Pavilion Laptop",
  "Canon Inkjet Printer",
  "Gaming PC 500GB SSD",
  "Apple Watch Ultra",
  "Bluetooth Speaker Boom",
   "airpodmax",
   
];
const filteredProducts = fakeProducts.filter((product) =>
  product.toLowerCase().includes(searchTerm.toLowerCase())
);*/

//CODE FOR THE WISHLIST!!!!
const [isWishlistOpen, setIsWishlistOpen] = useState(false);

// this code below just baically changes the color from black to green shikena!...
//i used bactick so that each of the prop can stay in their lines 
let heartStyle = {};

if (isWishlistOpen) {
  heartStyle = { filter: `
    invert(32%) 
    sepia(94%) saturate(437%) 
    hue-rotate(120deg) 
    brightness(90%) 
    contrast(90%)
    ` 
  };

} else {
  heartStyle = { filter: 'none' };
}
const handleWishlistClick = () => {
  if (isWishlistOpen) {
    setIsWishlistOpen(false);
  } else {
    setIsWishlistOpen(true);
  }
};
//THIS ENDS THE CODE FOR THE WISHLIST..........BELOW IS CODE FOR CART
const [isCartOpen, setIsCartOpen] = useState(false);
let cartStyle = {};
const handleCartClick = () => {
  if (isCartOpen) {
    setIsCartOpen(false);
  } else {
    setIsCartOpen(true);
  }
};
// this code below just baically changes the color from black to green shikena!...
//i used bactick so that each of the prop can stay in their lines 
if (isCartOpen) {
   cartStyle = { filter: `
    invert(32%) 
    sepia(94%) saturate(437%) 
    hue-rotate(120deg) 
    brightness(90%) 
    contrast(90%)
    ` 
  };

} else {
 cartStyle = { filter: 'none' };
}




  return (
    <header className="header">

      
      <div className="left-side-header">
      <div className="header__logo">
        <img src={logo} alt="Gadgetsman Logo" />
      </div>

      <input
  type="text"
  className="header__search"
  placeholder="Search here"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={handleSearch}
/>

{/*<div className="search-results">
  {searchTerm && (
    filteredProducts.length > 0 ? (
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    ) : (
      <p>No product found</p>
    )
  )}
</div>*/}{/* THIS CODE DISPLAYS the products that are available if any product is not available it will say "NO PRODUCT FOUND"  */}



       </div>


       
       <div className='middle-side-header'>
      <nav className="header__nav">
        <ul>
          <li className="header__nav-item">
            <a href="/">Home</a>
          </li>

          <li className="header__nav-item">
            <a href="/shop">Shop Now</a>
          </li>

          <li className="header__nav-item">
  <div>
    <a href="#" onClick={handleDropdownClick}>
      All Category
      <span className="dropdown-icon">▼</span>
    </a>

  {isDropdownOpen && (
  <div className="dropdown-menu">
    <ul>
      <li><a href="/phones">Phones</a></li>
      <li><a href="/laptops">Laptops</a></li>
      <li><a href="/accessories">Accessories</a></li>
      <li><a href="/printers">Printers</a></li>
      <li><a href="/pcs">PCs</a></li>
    </ul>
  </div>
)}

  </div>
</li>


          </ul>
      </nav>
      </div>
       

      <div className="right-side-header">
      <nav className="header__nav2">
        <ul>


     {/*this is the wishlist icon LOL THIS THING HARD */}           
    <li
        className="header__nav-icon-wishlist"
        onClick={handleWishlistClick}>

        <a href="#" style={heartStyle}>
          <img src="../../public/assets/heart_outline.svg" alt="Wishlist" />
          </a>

        {isWishlistOpen && (
      <div className="wishlist-dropdown">
          <p>No wishlist</p>
      </div>)}

    </li>



    <li className="header__nav-icon-cart" 
        onClick={handleCartClick}>
          <a href="#" style={cartStyle}>
              <img src="../../public/assets/cart.svg" alt="Cart" />
            </a>
               {isCartOpen && (
            <div className="cart-dropdown">
               <p>Cart is empty</p>
            </div>)}

    </li>

          <li className="header__nav-icon-login">
            <a href="#">
              <img src="../../public/assets/user.svg" alt="Login" />
              </a>
          </li>
        </ul>

      </nav>
      </div>
      
    </header>
  );
}

export default Header;