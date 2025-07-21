import PropTypes from "prop-types";

function Test({ name, review, grade }) {
  const stars = Array.from({ length: grade }, (_, index) => (
    <span key={index}>&#9733;</span>
  ));

  return (
    <>
    
    <div className="test-container">
      
      <h3>{name}</h3>
      <p>{review}</p>
      <div>{stars}</div>
    </div>
    </>
  );
}

Test.propTypes = {
  name: PropTypes.string,
  review: PropTypes.string,
  grade: PropTypes.number,
};

Test.defaultProps = {
  name: "Unknown",
  review: "No review provided",
  grade: 0,
};

export default Test;
