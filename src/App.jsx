import Player from "./componets/Player"

function App() {
  

  return (
  <main>
    <div id="game-container">
        <ol id="players">
          <Player playername="Player 1" symbol="X" />
          <Player playername="Player 2" symbol="O" />

        </ol>
    </div>
  </main>
  )
}

export default App
