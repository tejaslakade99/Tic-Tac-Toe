import React, { useState } from "react"
import Square from "./Square"

export default function Board(){
    const [state, setState] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    console.log('State', state)

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for(let logic of winnerLogic){
            const [a, b, c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }

        return false;
    }

    const checkDraw = () => {
        return !checkWinner() && state.every(value => value === "X" || value === "O")
    }

    const isWinner = checkWinner()
    const isDraw = checkDraw()
    

    const handleClick = (index) => {

        if(state[index] !== null){
            return
        }
        const copyState = [...state]
        copyState[index] = isXTurn ? "X" : "O"
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }

    return(
        <div className="board-container">
            {isDraw? (
                <> Game is Draw {" "}
                <button onClick={handleReset}>Play Again</button>
                </>
            ):isWinner? (
                <>{isWinner} Won the game {" "}
                <button onClick={handleReset}>Play Again</button>
                </>
            ) : (
                <>
                <h4>Player {isXTurn ? "X":"O"} play </h4>
                <div className="board-row">
                    <Square onClick={() => handleClick(0)} value={state[0]} box={"top-left-corner-box"} />
                    <Square onClick={() => handleClick(1)} value={state[1]} box={"middle-top-box"} />
                    <Square onClick={() => handleClick(2)} value={state[2]} box={"top-right-corner-box"} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(3)} value={state[3]} box={"middle-left-box"} />
                    <Square onClick={() => handleClick(4)} value={state[4]} />
                    <Square onClick={() => handleClick(5)} value={state[5]} box={"middle-right-box"} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(6)} value={state[6]} box={"bottom-left-corner-box"} />
                    <Square onClick={() => handleClick(7)} value={state[7]} box={"middle-bottom-box"} />
                    <Square onClick={() => handleClick(8)} value={state[8]} box={"bottom-right-corner-box"} />
                </div>
            </>
            )}
        </div>
    )
}