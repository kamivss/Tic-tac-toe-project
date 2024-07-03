import { useState } from "react";


const initialGameBoard =[
    [null,null, null],
    [null,null,null],
    [null,null,null]
];



export default function GameBoard ({onSelectSquare , activePlayer}){

/*const [gameBoard,setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex,colIndex){

        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(InnerArray => [...InnerArray])]
            updateBoard[rowIndex][colIndex] = activePlayer;// simbolo
            return updateBoard;
        });


        onSelectSquare();
    }*/

    return (
    
        <ol id="game-board">
            {gameBoard.map((row , rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=> (
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex,colIndex)} >{playerSymbol}</button>
                    </li>
                ))}
                </ol>
            </li>
            ))}
        </ol>
    
);
}