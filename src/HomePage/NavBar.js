import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightgreen",
  textDecoration: "none",
  color: "white",
  borderRadius: "10px",
};
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

function NavBar() {
  return (
    <div>
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={linkStyles}
      >
      <NavLink
        className="links"
        to="/"
        exact
        style={{textDecoration: "none"}}
      >
        Home
      </NavLink>
      </motion.div>
      <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={linkStyles}
    >
      <NavLink
        className="links"
        to="/tic_tac_toe"
        exact
        style={{textDecoration: "none"}}
      >
        TicTacToe
      </NavLink>
    </motion.div>
      <motion.div
      style={linkStyles}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        className="links"
        to="/hangman"
        exact
        style={{textDecoration: "none"}}
      >
        HangMan
      </NavLink>
    </motion.div>
      <motion.div
      style={linkStyles}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        className="links"
        to="/workinprogress"
        exact
        style={{textDecoration: "none"}}
      >
        ConstructionZone
      </NavLink>
    </motion.div>
    </div>
  );
}
export default NavBar;
