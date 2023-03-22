import React from "react";
import styles from "./CardClassic.module.css";

export interface IProps {
  label: string;
}

const CardClassic = (props: IProps) => {
  return <div className={`${styles.card}`}>{props.label}</div>;
};

export default CardClassic;
