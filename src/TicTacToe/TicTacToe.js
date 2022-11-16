<<<<<<< HEAD
import React, { useState } from 'react'
// import "./TicTacToe.css"
import {motion} from "framer-motion"
=======
import React, { useState, } from 'react'
import "./TicTacToe.css"
>>>>>>> main

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "lightgreen",
    textDecoration: "none",
    color: "white",
    borderRadius:"10px"
  };

const TicTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null)
    const [cells, setCells] = useState(Array(9).fill(''))
    const [clicked, setClicked] = useState(0)
    /* [
        '', '', '', 
        '', '', '',
        '', '', ''
        ]*/

      

    const checkForWinner = (squares) => {
        // console.log(cells)
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        }

        // Loop through each of the items in the squares Array
        // to see if any of them match the combos. 
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                // console.log(pattern)
                // console.log(combo)
                // console.log(combos)
                // console.log(pattern[0])
                // if any of the squares has an empty string no X or O
                // we cant have a winner
                // console.log(squares[pattern[1]])
                if (
                    [...cells, pattern[0]] === "" ||
                    squares[pattern[1]] === "" ||
                    squares[pattern[2]] === ""
                ) {
                    // do nothing
                    // check to see if first position matches the second 
                    // and if the second matches the third
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
<<<<<<< HEAD
                    ) {
                        // set the winner to the first letter in the squares array
                        setWinner(squares[pattern[0]])
                    }else if (clicked === 8 && winner === null) {
                        setWinner("nobody")
                    }
                })
=======
                ) {
                    // set the winner to the first letter in the squares array
                    setWinner(squares[pattern[0]])
                    setClicked(false)
                }
            })
        }
    }

    const handleClick = (num) => {
        setClicked(true)
        if (cells[num] !== " ") {
            alert("already clicked")
            return;
        }

        let squares = [...cells]

        if (turn === 'X') {
            squares[num] = "X"
            setTurn('O')
        } else {
            squares[num] = "O"
            setTurn('X')
        }

        let b = false

        if (clicked) {
            let a = 0
            for (let i = 0; i < cells.length; i++) {
                if (cells[i] !== ' ') {
                    b = true
                    a++;
                } else {b = false}
                
>>>>>>> main
            }
        }
        
        const handleClick = (num) => {
            setClicked(prevState => prevState + 1)
            console.log(clicked)
            if (cells[num] !== "") {
                setClicked(prevState => prevState - 1)
                alert("already clicked")
                return;
            }
            
            let squares = [...cells]
            
            if (turn === 'X') {
                squares[num] = "X"
                setTurn('O')
            } else {
                squares[num] = "O"
                setTurn('X')
            }
            
            
            setCells(squares)
            checkForWinner(squares)
            // if (clicked) {
            //     let a = 0
            //     cells.forEach(cell => {
            //         if (cell !== ""){
            //             a++
            //         }
            //     })
            //     console.log(a)
            //     if (a === 8 && winner == null) {
            //         return setWinner("nobody")
            //     } 
            // }
            
            
            
            // console.log(squares)
        }
        
        const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
        setClicked(0)
    }

    const Cell = ({ num }) => {
        return <td onClick={() => 
            handleClick(num)}>{cells[num]}</td>
    }

    return (
        <div className='container'>
            <h1>Turn : {turn}</h1>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && ( 
            <motion.div
                className="container"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 35
                }}
              >
                    <p>{winner} is the winner </p>
                    <button style={linkStyles} onClick={handleRestart}>Play Again</button>
                    </motion.div>
            )}
        </div>
    )
}

export default TicTacToe


//TESTING GIT
