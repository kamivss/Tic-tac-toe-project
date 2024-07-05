export default function Log({turns}) {
    
    return (
    <ol id="log">
    {turns.map(turn => 
    <li key={`${turn.square.row}${turn.square.col}`}>
        {turn.player} selecionou {turn.square.row},{turn.square.col}</li>)}
    </ol>
)}