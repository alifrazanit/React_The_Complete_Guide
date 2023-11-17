import { useState } from "react"
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export const GameBoard = ({onSelectedSquare, turns }) => {
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectedSquer = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activeSymbols;
    //         return updatedBoard;
    //     });
    //     onSelectedSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    )
}