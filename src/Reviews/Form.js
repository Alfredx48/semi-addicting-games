import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import { motion } from "framer-motion";

const Form = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((reviewData) => {
        setReviews(reviewData);
      });
  }, []);
  console.log(reviews);

  const [formData, setFormData] = useState({
    id: "",
    game: "",
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
    fetch("http://localhost:8000/posts", configObj)
      .then((res) => res.json())
      .then((review) => {
        console.log(review);
        setReviews((reviews) => [...reviews, review]);
      });
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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        <br/>
        <form className="form" onSubmit={handleSubmit}>
          <label>Game:</label>
          <select onChange={handleChange} name="game">
            <option>TicTacToe</option>
            <option>HangMan</option>
            <option>ConstructionZone</option>
          </select>
          <label>Name:</label>
          <input
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
          ></input>
          <label>Rating:</label>
          <select onChange={handleChange} name="rating">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label>Reviews:</label>
          <textarea
            onChange={handleChange}
            placeholder="Review"
            name="review"
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
