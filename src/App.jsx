import { Player } from "./components/Player/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" sysmbol="X"/>
          <Player name="Player 2" sysmbol="O"/>
        </ol>
        Game Board
      </div>
      LOG
    </main>
  );
}

export default App;
