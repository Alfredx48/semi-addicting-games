import React from "react";

const Reviews = ({ reviews }) => {
  const mappedReviews = reviews.map((review) => {
    return (
        <>

      <div className="reviews" key={review.id} >
        <h1>Name:{review.name}</h1>
        <h3>Game:{review.game}</h3>
        <h3>Rating:{review.rating}</h3>
        <h4>Review:</h4>
        <p>{review.review}</p>
      </div>
      <br/>
      </>
    );
  });
  return <div>{mappedReviews}</div>;
};

export default Reviews;
