import { useState, useEffect } from 'react';



function HERO () {
   const [currentSlide, setCurrentSlide] = useState(0);

const slideImages = [
  "public/hero-main.png",
  "public/hero2.png",
  "public/hero3.png",
  "public/hero-4.png"
];



useEffect(() => {
  const interval = setInterval(() => {
   
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  } ,3000); // 3000ms = 3 seconds  // use setinterval to change slide every 3 seconds

 
  return () => clearInterval(interval);
}, [slideImages.length]);

 return(
    <section className="hero-section-container">
      <div className="hero-content-grid">

        <div className="iphone14-grid-item">
           <div className="image-iphone14">    
           <img src={slideImages[currentSlide]} alt="Slideshow Image" />
          </div>

          
          
        </div>



        <div className="macbook-grid-item">
           <div className="image-macbook">    
          <img src="public/macbook.webp" />
          </div>

          <div className="text-heading-imacbook">
          <h2>Mac Book <span>Pro</span></h2>
           <p>ELEVATE YOUR WORKFLOW</p>
          </div>
          
        </div>

                    
        <div className="samsung-grid-item">
           <div className="image-samsung">    
            <img src="public/newsam.jpg" />
           </div>

            <div className="text-heading-samsung">
            <p><span>Samsung</span> Galaxy S25 <span>Ultra</span></p>
            </div>
                        
        </div>




        <div className="iphone16max-grid-item">
           <div className="image-iphone16max">    
            <img src="public/goldiphone16.webp" />
           </div>

            <div className="text-heading-iphone16max">
            <p>Iphone 16 Pro <span> Max</span> </p>
            </div>
                        
       </div>




























































      
      </div>
    </section>
 )


}
export default HERO;