export default function GameOver({winner, onRestart}){
    return (
    <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} ganhou!</p>}
        {!winner && <p>Deu Velha!</p>}
        <p>
            <button onClick={onRestart}> Reiniciar!</button>
        </p>
    </div>
    )
}