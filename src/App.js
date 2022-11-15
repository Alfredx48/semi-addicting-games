import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import HomePage from './HomePage/HomePage';
import NavBar from './HomePage/NavBar';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/tic_tac_toe">
        <TicTacToe />
      </Route>
      <Route exact path="/hangman">
        <h1>Work in Progress</h1>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
