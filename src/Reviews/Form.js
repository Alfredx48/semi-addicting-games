import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import { motion } from "framer-motion";

const Form = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://reviews-json.onrender.com/posts")
      .then((res) => res.json())
      .then((reviewData) => {
        setReviews(reviewData);
      });
  }, []);
  console.log(reviews);

  const [formData, setFormData] = useState({
    id: "",
    game: "ConstructionZone",
    name: "",
    rating: 0,
    review: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("https://reviews-json.onrender.com/posts", configObj)
      .then((res) => res.json())
      .then((review) => {
        console.log(review);
        setReviews((reviews) => [...reviews, review]);
      });
      setFormData({
        id: "",
        game: "ConstructionZone",
        name: "",
        rating: 0,
        review: "",
      })
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="formReviews">
      <h1 className="font-effect-anaglyph">Reviews</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <label>Game:</label>
          <select onChange={handleChange} value={formData.game} name="game">
            <option value="TicTacToe">TicTacToe</option>
            <option value="HangMan">HangMan</option>
            <option value="ConstructionZone">ConstructionZone</option>
          </select>
          <label>Name:</label>
          <input
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
          ></input>
          <label>Rating:</label>
          <select onChange={handleChange} value={formData.rating} name="rating">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>Reviews:</label>
          <textarea
            onChange={handleChange}
            placeholder="Review"
            name="review"
            value={formData.review}
          ></textarea>
          <br />
          <button>Submit</button>
        </form>
        <br />
      </motion.div>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Form;
