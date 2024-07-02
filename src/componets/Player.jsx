import React, { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameDisplay = (
        <span className="player-name">{playerName}</span>
    );

    if (isEditing) {
        playerNameDisplay = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    return (
        <li>
            <span className="player">
                {playerNameDisplay}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
