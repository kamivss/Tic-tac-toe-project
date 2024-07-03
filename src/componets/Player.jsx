import React, { useState } from "react";

// Define e exporta um componente funcional chamado Player, que recebe duas props: initialName e symbol
export default function Player({ initialName, symbol , isActive}) {
    // Declara dois estados locais: playerName e isEditing, inicializando-os com initialName e false, respectivamente
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    // Função que alterna o estado de isEditing entre true e false
    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    // Função que atualiza o estado playerName com o valor do input
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    // Declara uma variável que inicialmente armazena um elemento <span> para exibir o nome do jogador
    let playerNameDisplay = (
        <span className="player-name">{playerName}</span>
    );

    // Se isEditing for true, a variável playerNameDisplay passa a armazenar um elemento <input> para editar o nome do jogador
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
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerNameDisplay}
                <span className="player-symbol">{symbol}</span>
            </span>
            {/* Botão que alterna entre "Edit" e "Save", dependendo do estado de isEditing */}
            <button onClick={handleClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
