import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

function first_player_won(props, state) {
  const tmp = state.cells;
  for (let i = 0; i < tmp.length; i++) {
    let counter = 0;
    for (let j = i; j < tmp.length; j++) {
      if (tmp[i] !== tmp[j]) {
        break;
      } else if (state.cells[j] !== '?') {
        counter++;
      }
      if (counter === 3) {
        return tmp[i] === 'O' ? "Player 1" : "Player 2";
      }
    }
  }
  const square = Math.sqrt(tmp.length);
  for (let i = 0; i < tmp.length; i++) {
    let counter = 0;
    for (let j = i; j < tmp.length; j+= square) {
      if (tmp[i] !== tmp[j]) {
        break;
      } else if (tmp[j] !== '?') {
        counter++;
      }
      if (counter === 3) {
        return tmp[i] === 'O' ? "Player 1" : "Player 2";
      }
    }
  }
  if (tmp[4] !== '?') {
    if ((tmp[0] === tmp[4] && tmp[4] === tmp[8])
        || (tmp[2] === tmp[4] && tmp[4] === tmp[6])) {
      return tmp[4] === 'O' ? "Player 1" : "Player 2";
    }
  }
  return "stale";
}


class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill('?'),
      currentPlayer: "player 1",
      finished: "stale"
    };
  }

  update = (index, value) => {
    if (this.state.finished !== "stale") {
      return
    }
    const tmp = this.state.cells;
    if (tmp[index] === '?') {
      this.setState({ currentPlayer: this.state.currentPlayer === "player 1" ? "player 2" : "player 1" });
      tmp[index] = value;
      this.setState({cells: tmp});
    }
  };


  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    state.finished = first_player_won(props, state);
    return state;
  }

  render() {
    return (
      <div style={gameLayoutStyle} >
        <GameInfo gameState={this.state} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} onClickCell={(cellIndex) => {
          this.update(cellIndex, this.state.currentPlayer === "player 1" ? 'O' : 'X')}} />
        {this.state.output}
  </div>
);
  }
}

export default GameLayout;
