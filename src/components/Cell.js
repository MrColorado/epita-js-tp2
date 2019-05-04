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

const Cell = ({ value = '?', onClick = () => {}, isMouseOver = false}) => (
  <div
  style={{...cellStyle, borderRadius: isMouseOver ? 1 : 0}}
  onClick={onClick}>{value}</div>
);

export default Cell;

