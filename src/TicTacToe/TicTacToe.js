import React, { useState } from 'react'
import "./TicTacToe.css"


const TicTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null)
    const [cells, setCells] = useState(Array(9).fill(" "))
    const [clicked, setClicked] = useState(false)
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
                if (
                    [...cells, pattern[0]] === " " ||
                    squares[pattern[1]] === " " ||
                    squares[pattern[2]] === " "
                ) {
                    // do nothing
                    // check to see if first position matches the second 
                    // and if the second matches the third
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
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
                    b = false
                    a++;
                } else {b = true}
                
            }
            console.log(a)
            if (a === 8 && b === true && cells[8] !== ' ') {
                return setWinner("nobody")
            } 
        }



        checkForWinner(squares)
        setCells(squares)
        // console.log(squares)
    }

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(' '));
    }

    const Cell = ({ num }) => {
        return <td onClick={() => 
            handleClick(num)}>{cells[num]}</td>
    }

    return (
        <div className='container'>
            Turn : {turn}
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
                <>
                    <p>{winner} is the winner </p>
                    <button onClick={() => handleRestart()}>Play Again</button>
                </>
            )}
        </div>
    )
}

export default TicTacToe


//TESTING GIT
