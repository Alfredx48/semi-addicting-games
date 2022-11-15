import React, {useState} from "react";
import "./HomePage.css"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import TicTacToe from "../TicTacToe/TicTacToe";

const HomePage = () => {
    return(
        <div className="HomePage">
            <motion.div
                className="container"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                >
            <h1>Hello from the HomePage</h1>
            </motion.div>
            <AnimateSharedLayout>
                <motion.ul layout initial={{ borderRadius: 25 }}>
                    <Item1 />
                    <Item2 />
                </motion.ul>
            </AnimateSharedLayout>
        </div>
    )
}

const Item1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <motion.li layout onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} initial={{ borderRadius: 10 }}>
            <AnimatePresence>{isOpen && <Game1 />}</AnimatePresence>
        </motion.li>
    )
}
const Item2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <motion.li layout onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} initial={{ borderRadius: 10 }}>
            <AnimatePresence>{isOpen && <Game2 />}</AnimatePresence>
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
        Hello
      </motion.div>
    )
}
export default HomePage