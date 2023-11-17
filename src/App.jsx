import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";
import React, { useState } from "react";
import { Log } from "./components/Log/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const setActivePlayerHandler = (rowIndex, colIndex) => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurn((prevGameTurn) => {
      let currentPlayer = 'X';

      if(prevGameTurn.length > 0 && prevGameTurn[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer},
        ...prevGameTurn
      ];

      return updatedTurns;
    })
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" sysmbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" sysmbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectedSquare={setActivePlayerHandler} turns={gameTurn}/>
      </div>
      <Log turns={gameTurn}/>
    </main>
  );
}

export default App;
