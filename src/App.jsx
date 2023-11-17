import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";
import React, { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const setActivePlayerHandler = (e) => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" sysmbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" sysmbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectedSquare={setActivePlayerHandler} activeSymbols={activePlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
