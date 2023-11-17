import { useState } from "react"
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export const GameBoard = ({onSelectedSquare}) => {
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
                            <button onClick={onSelectedSquare}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    )
}