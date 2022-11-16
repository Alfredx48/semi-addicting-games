import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import Hangman from './Hangman - Copy/Hangman';
import HomePage from './HomePage/HomePage';
import NavBar from './HomePage/NavBar';
import { Route, Switch } from "react-router-dom";
import HomePageStyle from './HomePage/HomePageStyling';
import TicTacToeStyle from './TicTacToe/TicTacToeStyling';
import HangmanStyle from './Hangman - Copy/HangmanStyling';

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
