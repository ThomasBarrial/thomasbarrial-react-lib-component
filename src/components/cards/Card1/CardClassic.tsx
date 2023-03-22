import React from "react";
import "./CardClassic.css";

export interface IProps {
  label: string;
}

const CardClassic = (props: IProps) => {
  return <div className="card">{props.label}</div>;
};

export default CardClassic;
