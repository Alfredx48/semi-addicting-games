import { useEffect, useState } from "react";
import React from 'react'

const Test = () => {
    const [words, setWords] = useState([])

    const getData = () => { 
      
            
        fetch("https://random-word-api.herokuapp.com/word")
        .then((res=> res.json()))
        .then((wordData) => {
            setWords(wordData)
            console.log(words)
        
        })

    }

    useEffect (() => {getData() }, [])


  return (
    <div onClick={() => getData()}>Test</div>
  )
}

export default Test