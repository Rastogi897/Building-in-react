import React, { useState, useEffect } from 'react'
import './style.css'

const TicTacToe = () => {
    const [matrix, setMatrix] = useState(["", "", "", "", "", "", "", "", ""]);
    const [turn, setTurn] = useState("O");
    const [winner, setWinner] = useState(null)

    const handleInput = (index) => {
        let updatedMatrix = matrix.map((value, i) => {
            if (index == i && value == "") {
                setTurn((prev) => prev == "O" ? "X" : "O");
                return turn;
            } else return value;
        })
        setMatrix(updatedMatrix)
    }

    useEffect(() => {
        // vertically 
        for (let i = 0; i <= 2; i++) {
            if (matrix[i] == matrix[i + 3] && matrix[i + 3] == matrix[i + 6] && matrix[i] != "")
                setWinner(matrix[i]);
        }

        //horizontal
        for (let i = 0; i <= 6; i += 3) {
            if (matrix[i] == matrix[i + 1] && matrix[i + 1] == matrix[i + 2] && matrix[i] != "")
                setWinner(matrix[i]);
        }

        // diagonal
        if (matrix[0] == matrix[4] && matrix[4] == matrix[8] && matrix[0] != "")
            setWinner(matrix[0]);

        if (matrix[2] == matrix[4] && matrix[4] == matrix[6] && matrix[2] != "")
            setWinner(matrix[2]);

    }, [matrix]);

    return (
        <div className='container'>
            {winner == null ? <h2>Turn for {turn}</h2> : <h2>GAMES ENDS!</h2>}
            <div className='grids'>
                {matrix.map((value, index) => {
                    return <div className='grid' key={index} onClick={() => handleInput(index)}>
                        {value}
                    </div>
                })}
            </div>
            {winner && <h2>{winner} wins the game</h2>}
        </div>
    )
}

export default TicTacToe