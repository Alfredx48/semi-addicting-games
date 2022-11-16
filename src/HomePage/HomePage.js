import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import TicTacToe from "../TicTacToe/TicTacToe";
import Hangman from "../Hangman/Hangman";
import { NavLink } from "react-router-dom";
const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "lightgreen",
    textDecoration: "none",
    color: "white",
    borderRadius:"10px"
  };

const HomePage = () => {
    return(
        <div className="HomePage">
            <motion.div
                className="container"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20
                }}
                >
            <h1>Hello from the HomePage</h1>
            </motion.div>
                <motion.ul layout initial={{ borderRadius: 25 }}>
                    <Item1 />
                    <Item2 />
                    <Item3 />
                </motion.ul>
        </div>
    )
}

const Item1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <motion.li layout onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <h2>TicTacToe</h2>
            <AnimatePresence>{isOpen && <Game1 />}</AnimatePresence>
        </motion.li>
    )
}
const Item2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <motion.li layout onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <h2>HangMan</h2>
            <AnimatePresence>{isOpen && <Game2 />}</AnimatePresence>
        </motion.li>
    )
}
const Item3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <motion.li layout onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <h2>Construction Zone</h2>
            <AnimatePresence>{isOpen && <Game3 />}</AnimatePresence>
        </motion.li>
    )
}

const Game1 = () => {
    return (
        <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <TicTacToe />
        <br/>
        <NavLink exact to="/tic_tac_toe" style={linkStyles} className="links">Play Game</NavLink>
      </motion.div>
    )
}
const Game2 = () => {
    return (
        <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hangman/>
        <br/>
        <NavLink exact to="/hangman" style={linkStyles} className="links">Play Game</NavLink>
      </motion.div>
    )
}
const Game3 = () => {
    return (
        <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>WorkInProgress</h1>
        <br/>
        <NavLink exact to="/workinprogress" style={linkStyles} className="links">Play Game</NavLink>
      </motion.div>
    )
}
export default HomePage