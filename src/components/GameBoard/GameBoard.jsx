import { useState } from "react"

export const GameBoard = ({onSelectedSquare, board }) => {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectedSquare(rowIndex, colIndex)} disabled={playerSymbol ? true: false}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    )
}