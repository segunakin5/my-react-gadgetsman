
function Category(){
  return(
    <div className="category-container">
      <div className="category-header">
        <h1>All Categories</h1>
      </div>

      <div className="category-list">
        <ul>
          <li className="category-items" ><a href="#">
            <img src = "../../public/assets/phone.svg" alt="Phones" />
            </a>
            <p>Phones</p>
            </li>

            
          <li className="category-items"><a href="#">
            <img src = "../../public/assets/printer.svg" alt="Printer" />
            </a>
            <p>Printers</p>
            </li>


          <li className="category-items"><a href="#">
            <img src = "../../public/assets/laptops.svg" alt="Laptops" />
            </a>
            <p>Laptops</p>
            </li>


          <li className="category-items"><a href="#">
            <img src = "../../public/assets/gaming.svg" alt="Gaming" />
            </a>
            <p>Gaming</p>
            </li>

          <li className="category-items"><a href="#">
            <img src = "../../public/assets/accesories.svg" alt="Accesories" />
            </a>
            <p>Accesories</p>
            </li>
          <li className="category-items"><a href="#">
            <img src = "../../public/assets/TV.svg" alt="TVs" />
            </a>
            <p>TVs</p>
            </li>

          <li className="category-items"><a href="#">
            <img src = "../../public/assets/Pc.svg" alt="PCs" />
            </a>
            <p>PCs</p>
            </li>


          <li className="category-items"><a href="#">
            <img src = "../../public/assets/speakers.svg" alt="Speakers" />
            </a>
            <p>Speakers</p>
            </li>
        </ul>
      </div>

    </div>


  );

}
export default Category;