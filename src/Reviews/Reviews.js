import {motion} from "framer-motion"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const Reviews = ({ reviews }) => {
  const mappedReviews = reviews.map((review) => {
    return (
      <>
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="reviews"
      >
      <div key={review.id} >
        <h1>Name:{review.name}</h1>
        <h3>Game:{review.game}</h3>
        <h3>Rating:{review.rating}</h3>
        <h4>Review:</h4>
        <p>{review.review}</p>
      </div>
      </motion.div>
      <br/>
      </>
    );
  });
  return <div>{mappedReviews}</div>;
}

export default Reviews;