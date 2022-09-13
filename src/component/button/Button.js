import React from "react";

function Button({ color, title, ...props }) {
  const style = {
    width: "224px",
    height: "48px",
    backgroundColor: color || "#3067F1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "25px",
    borderColor: "#06070a",
    cursor: "pointer",
  };

  return (
      <div style={style} {...props}>{title}</div>
  );
}

export default Button;
