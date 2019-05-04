import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "gray"
    }
  }

  render() {
    return (
      <div
        style={{...cellStyle, backgroundColor: this.state.color}}
        onClick={this.props.onClick} onMouseOver={() => {this.setState({color: "red"})}}
        onMouseOut={() => {this.setState({color: "gray"})}}>{this.props.val}
      </div>
    )
  }
}

export default Cell;

