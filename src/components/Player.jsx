import React, { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const playerInput = useRef();

  const handleClick = (e) => {
    setPlayerName(playerInput.current.value);
    playerInput.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName !== "" ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
