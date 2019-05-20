import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown"}) => (
    gameState.finished === "stale" ? <h3>It's your turn {currentPlayer}</h3> : <h3>{gameState.finished} won</h3>
);

export default GameInfo;
