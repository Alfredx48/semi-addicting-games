import React, { useEffect, useState } from 'react'
import Figure from './Figure'
import './Hangman.css'
import WrongLetters from './WrongLetters'
import Word from './Word'
import WordPopup from './WordPopup'
import Notification from './Notification'



const words = ['application', 'programming', 'interface', 'wizard', 'librarian', 'granite','trampoline','garage','retraction','reminiscing','nicotine','rattling','summon','jumping','entangle','euphoric','caramel','dreaming','responsible','cannabis','raspberry','lemonade','classified','rabbit','repeating','mentioned','provide','established','democracy','renting','liberty','construction','trembling','salmon','laughter','serpentine','retirement','attraction','rebel'];



// let playable = true;

// const correctLetters = [];
// const wrongLetters = [];


const Hangman = () => {
  //const [words, setWords] = useState([])
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  useEffect(() => {
      const handleKeyDown = e => {
        const {key, keyCode} = e
        
          if (playable && e.keyCode >= 65 && e.keyCode <= 90) {
            const letter = e.key.toLowerCase();
      
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
      
                displayWord();
              } else {
                showNotification();
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
      
                updateWrongLettersEl();
              } else {
                showNotification();
              }
            }
      


  })
  window.addEventListener('keydown', e => {
    if (playable) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
  
            displayWord();
          } else {
            showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
  
            updateWrongLettersEl();
          } else {
            showNotification();
          }
        }
      }
    }
  });
  // const randomWord = () => {
  //   fetch('https://random-word-api.herokuapp.com/word?number=50')
  //   .then(resp => resp.json())
  //   .then(wordData => {
  //     setWords(wordData)
      
  // })}

 
 
    

  //  randomWord()
  return (
    
    <>
      <div>Hangman</div>
      
      <Figure />
      <WrongLetters />
      <Word  correctLetters={correctLetters}selectedWord={selectedWord}/>
      <WordPopup />
      <Notification />
    </> 
    
  )
}

export default Hangman;