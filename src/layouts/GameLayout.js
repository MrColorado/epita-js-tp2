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

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill('?'),
      currentPlayer: "player 1"
    };
  }

  update = (index, value) => {
    const tmp = this.state.cells;
    tmp[index] = value;
    this.setState({cells: tmp});

    for (let i = 0; i < this.state.cells.length; i++) {
      let counter = 0;
      for (let j = i; j < this.state.cells.length; j++) {
        if (this.state.cells[i] !== this.state.cells[j]) {
          break;
        } else if (this.state.cells[j] !== '?') {
          counter++;
        }
        if (counter === 3) {
          console.log(this.state.cells[i] === 'O' ? 1 : 2);
        }
      }
    }
    const square = Math.sqrt(this.state.cells.length);
    for (let i = 0; i < this.state.cells.length; i++) {
      let counter = 0;
      for (let j = i; j < this.state.cells.length; j+= square) {
        if (this.state.cells[i] !== this.state.cells[j]) {
          break;
        } else if (this.state.cells[j] !== '?') {
          counter++;
        }
        if (counter === 3) {
          console.log(this.state.cells[i] === 'O' ? 1 : 2);
        }
      }
    }
    if ((tmp[0] === tmp[4] && tmp[4] === tmp[8]) || (tmp[2] === tmp[4] && tmp[4] === tmp[6])) {
      if (this.state.cells[4] === 'O') {
        console.log(1)
      }
      else if (this.state.cells[4] === 'X') {
        console.log(2)
      }
    }
  };

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
        onClick={() => this.setState({ currentPlayer: this.state.currentPlayer === "player 1" ? "player 2" : "player 1" })} >
        <GameInfo gameState={GameLayout} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} onClickCell={(cellIndex) => {
          this.update(cellIndex, this.state.currentPlayer === "player 1" ? 'O' : 'X')}} />
  </div>
);
  }
}

export default GameLayout;
