import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import Hangman from './Hangman/Hangman';
import HomePage from './HomePage/HomePage';
import NavBar from './HomePage/NavBar';
import { Route, Switch } from "react-router-dom";
import HomePageStyle from './HomePage/HomePageStyling';
import TicTacToeStyle from './TicTacToe/TicTacToeStyling';
import HangmanStyle from './Hangman/HangmanStyling';
import ConstructionZoneStyle from './ConstructionZone/ConstructionZoneStyling';
import NotFound from './NotFound/NotFound';
import NotFoundStyle from './NotFound/NotFoundStyling';
import {useState} from "react"
import * as React from "react";
import { motion } from "framer-motion";
import Reviews from './Reviews/Form';

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: .4
    }
  }
};

const item = {
  hidden: { y: -100, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "dodgerblue",
  textDecoration: "none",
  color: "papayawhip",
  borderRadius:"10px",
  border:"none",
  cursor: "pointer"
};


function App() {
  const [clicked,setClicked] = useState(false)
  const Img = () => {
    if(clicked){
      return(
        <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >      <motion.div
      className="container"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
          <motion.img src='https://media.tenor.com/-qI_wQRqfzUAAAAC/cat-angy.gif' alt='Cameron' variants={item}/>
          <motion.img src='https://media.tenor.com/bCfpwMjfAi0AAAAC/cat-typing.gif' alt='Alfred' variants={item}/>
          <motion.img src='https://media.tenor.com/pankkhRsjKAAAAAd/computer-retribution.gif' alt='John' variants={item}/>
    </motion.div>
      </motion.div>
      )}
  }
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
      <NavBar/>
        <HomePageStyle />
        <HomePage />
      </Route>
      <Route exact path="/tic_tac_toe">
      <NavBar/>
        <TicTacToeStyle />
        <TicTacToe />
      </Route>
      <Route exact path="/hangman">
      <NavBar/>
        <HangmanStyle/>
        <Hangman/>
      </Route>
      <Route exact path="/workinprogress">
      <NavBar/>
        <ConstructionZoneStyle/>
        <h1 className='font-effect-anaglyph'>WorkInProgress</h1>
        <button onClick={()=>setClicked(!clicked)} style={linkStyles}>Click Here to see backend</button>
        <br/>
        <Img/>
      </Route>
      <Route exact path="/reviews">
        <NavBar/>
        <Reviews />
      </Route>
      <Route path='*'>
        <NotFoundStyle />
        <NotFound />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
