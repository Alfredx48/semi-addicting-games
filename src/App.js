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
import {useState} from "react"

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
        <div>
          <img src='https://media.tenor.com/-qI_wQRqfzUAAAAC/cat-angy.gif' alt='Cameron'/>
          <img src='https://media.tenor.com/bCfpwMjfAi0AAAAC/cat-typing.gif' alt='Alfred'/>
          <img src='https://media.tenor.com/pankkhRsjKAAAAAd/computer-retribution.gif' alt='John'/>
        </div>
      )}
  }
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <HomePageStyle />
        <HomePage />
      </Route>
      <Route exact path="/tic_tac_toe">
        <TicTacToeStyle />
        <TicTacToe />
      </Route>
      <Route exact path="/hangman">
        <HangmanStyle/>
        <Hangman/>
      </Route>
      <Route exact path="/workinprogress">
        <ConstructionZoneStyle/>
        <h1>WorkInProgress</h1>
        <button onClick={()=>setClicked(!clicked)} style={linkStyles}>Click Here to see backend</button>
        <br/>
        <Img/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
