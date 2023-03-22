import React from "react";
import "./ButtonClassic.css";

export interface ButtonClassicProps {
  label: string;
  backgroundColor: string;
  color: string;
  isBold: boolean;
}

const ButtonClassic = (props: ButtonClassicProps) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontWeight: props.isBold ? "bold" : "normal",
      }}
    >
      {props.label}
    </button>
  );
};

export default ButtonClassic;
