import { useState } from "react"
import Player from "./componets/Player"
import GameBoard from "./componets/GameBoard"
import Log from "./componets/Log";

function App() {
const [gameTurns,setGameTurns] = useState([]);
const [activePlayer,setActivePlayer]= useState('X');

 function handleSelectSQuare(){
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' :'X')
  setGameTurns()
 }

  return (
  <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer ==='O'}/>

        </ol>
        <GameBoard onSelectSquare={handleSelectSQuare} activePlayer={activePlayer} disatable={activePlayer}/>
    </div>
    <Log />
  </main>
  )
}

export default App
