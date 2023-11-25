import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";
import React, { useState } from "react";
import { Log } from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import { GameOver } from './components/GameOver/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function ActivePlayer(gameTurn) {
  let currentPlayer = "X";

  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = ActivePlayer(gameTurn);
  let gameBoard = initialGameBoard;
  let winner;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbols = gameBoard[combination[0].row][combination[0].column];
    const secondSymbols = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbols = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbols &&
      firstSymbols === secondSymbols &&
      firstSymbols === thirdSymbols
    ) {
      winner = firstSymbols;
    }
  }
  const hasDraw = gameTurn.length === 9 && !winner;


  const setActivePlayerHandler = (rowIndex, colIndex) => {
    setGameTurn((prevGameTurn) => {
      const currentPlayer = ActivePlayer(prevGameTurn);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurn,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" sysmbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" sysmbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}/>}
        <GameBoard
          onSelectedSquare={setActivePlayerHandler}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
