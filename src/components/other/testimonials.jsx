import PropTypes from "prop-types";


function TestimonialCard({ name, review, grade }) {
  const stars = Array.from({ length: grade }, function(_, index) {
    return <span key={index}>&#9733;</span>;
  });

  return (
    <div className="test-container">
      <h3>{name}</h3>
      <p>{review}</p>
      <div>{stars}</div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string,
  review: PropTypes.string,
  grade: PropTypes.number,
};

TestimonialCard.defaultProps = {
  name: "Unknown",
  review: "No review provided",
  grade: 0,
};


function Testimonials() {
  // Array of testimonial
  const testimonialsData = [
    {
      id: 1,
      name: "Adebayo Johnson",
      review: "Amazing service! My Samsung phone arrived quickly and works perfectly. Best prices in Lagos!",
      grade: 5
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      review: "Great customer support and fast delivery. The iPhone was exactly as described.",
      grade: 4
    },
    {
      id: 3,
      name: "Chidi Okafor",
      review: "Excellent quality products. The laptop I bought has been working flawlessly for 6 months.",
      grade: 5
    },
    {
      id: 4,
      name: "Blessing Udoh",
      review: "Good experience overall. Delivery took a bit longer than expected but product quality is top notch.",
      grade: 4
    },
    {
      id: 5,
      name: "Tunde Williams",
      review: "Best gadget store! Competitive prices and authentic products. Highly recommended!",
      grade: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <h1 className="testimonials-heading">Testimonies from our customers</h1>
      <div className="test-wrapper">
        {testimonialsData.map(function(testimonial) {
          return (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name} 
              review={testimonial.review} 
              grade={testimonial.grade} 
            />
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;