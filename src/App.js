import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import Hangman from './Hangman/Hangman'
function App() {
  return (
    <div className="App">
      <TicTacToe />
      <br/>
      <br/>
      <Hangman />
    </div>
  );
}

export default App;
