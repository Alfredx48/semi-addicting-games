import {createGlobalStyle} from "styled-components"

const HangmanStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=pressstart2p:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  background: linear-gradient(290deg, palegreen, thistle);
  color: #fff;
  font-family:Sono;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background-repeat: no-repeat;
}

h1 {
  margin: 20px 0 0;
}

.game-container {
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 350px;
  width: 450px;
}

.figure-container {
  fill: transparent;
  stroke: darkgoldenrod;
  stroke-width: 10px;
  stroke-linecap: round;
}

.figure-part {
  display: none;
}

.wrong-letters-container {
    bottom: -20px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
}

.wrong-letters-container p {
  margin: 0 0 5px;
}

.wrong-letters-container span {
  font-size: 24px;
}

.word {
  display: flex;
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
}

.letter {
  border-bottom: 5px solid midnightblue;
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  height: 50px;
  width: 20px;
  font-weight: bold
  text-transform: uppercase;
}

.popup-container {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex; 
  display: none;
  align-items: center;
  justify-content: center;
}

.popup {
  background: #2980b9;
  border-radius: 5px;
  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.popup button {
  cursor: pointer;
  background-color: #fff;
  color: #2980b9;
  border: 0;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
}

.popup button:active {
  transform: scale(0.98);
}

.popup button:focus {
  outline: 0;
}

.notification-container {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  position: absolute;
  bottom: -100px;
  transition: transform 0.3s ease-in-out;
  left: 25%
}

.notification-container p {
  margin: 0;
}

.notification-container.show {
  transform: translateY(-100px);
}
`
export default HangmanStyle