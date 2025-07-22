
function Trending (){
return(
<section className="trending-container">
  <h2>
    Trending
  </h2>

<div className="button-trending">
      <button>Phones</button>
      <button>PC</button>
      <button>Laptops</button>
      <button>Game Consoles</button>
      <button>Others</button>
</div>


<div className="trending-item-grid">


<div className="ps5">
    <img src ="public/ps5.jpg" />
    <p className="product-name-ps5">Playstation 5</p>
    <p className="product-price-ps5">&#8358;950,000</p>
</div>


<div className="samsungs21-ultra">
    <img src="public/s21ultra5g.jpg"/>
    <p className="product-name-s21ultra">Samsung Galaxy s21 Ultra 5G</p>
    <p className="product-price-s21ultra">&#8358;600,000</p>

</div>


<div className="laptop-mac">
    <img src="public/macpro.jpg"/>
    <p className="product-name-macpro">Macbook pro m4</p>
    <p className="product-price-macpro">&#8358;6,500,000</p>

</div>


<div className="imac">
    <img src="public/imac.jpg"/>
    <p className="product-name-imac">IMac monitor</p>
    <p className="product-price-imac">&#8358;2,800,000</p>

</div>


<div className="iphone-11">
    <img src="public/iphone-11.jpg"/>
    <p className="product-name-iphone11">Iphone 11</p>
    <p className="product-price-iphone11">&#8358;580,000</p>
</div>


<div className="i13-pro">
    <img src="public/13pro.jpg"/>
    <p className="product-name-13pro">Iphone 13 Pro</p>
    <p className="product-price-13pro">&#8358;750,000</p>
  
</div>









</div>
  
   


</section>



);




}
export default Trending;