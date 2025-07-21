import Header from './Header.jsx';
import HERO from './hero-section.jsx';
import Picks from './picks.jsx';
import Category from './category.jsx';
import NewsLetter from './newsletter.jsx';
import ProductShow from './productshow.jsx';
import Trending from './trending.jsx';
import Test from './testimonials.jsx';
import Services from './services.jsx';
import Footer from './Footer.jsx';
import Product from './product.jsx'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './shop.jsx';

function App() {
  return (
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={
      <>
        <HERO />
        <Picks title="HOT PICKS JUST FOR YOU" />
        <Category />
        <NewsLetter />
        <ProductShow />
        <Picks title="Recommended For You" style={{ backgroundColor: 'white', marginTop: '20px' }} />
        <Trending />
        
        <section className="testimonials-section">
          <h1 className="testimonials-heading">Testimonies from our customers</h1>
          <div className="test-wrapper">
            <Test name="Unknown" review="No review provided" grade={5} />
            <Test name="Unknown" review="No review provided" grade={5} />
            <Test name="Unknown" review="No review provided" grade={5} />
            <Test name="Unknown" review="No review provided" grade={5} />
            <Test name="Unknown" review="No review provided" grade={5} />
          </div>
        </section>

        <Services />
      </>
    } />
    {/*this are the routes that direct us to each of the  extra pages */}
    <Route path="/shop" element={<Shop />} />
   <Route path="/product/:id" element={<Product />} />
 n

   </Routes>
  
  <Footer />


</BrowserRouter>
  );
}

export default App;