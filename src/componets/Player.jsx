import { useState } from "react"
export default function Player({playername,symbol}){
    const [isEditing, setIsEditing] = useState(false);
    function handleClick(){ 
        setIsEditing(!isEditing);
    }
    let playerName =  <span className="player-name">{playername}</span>;
 
    if(isEditing){
        playerName= <input type="text" required value={playername}/>

    }
    return (
    <li>
            <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}