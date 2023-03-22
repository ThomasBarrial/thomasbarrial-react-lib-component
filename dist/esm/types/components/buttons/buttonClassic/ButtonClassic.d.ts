/// <reference types="react" />
import "./ButtonClassic.css";
export interface ButtonClassicProps {
    label: string;
    backgroundColor: string;
    color: string;
    isBold: boolean;
}
declare const ButtonClassic: (props: ButtonClassicProps) => JSX.Element;
export default ButtonClassic;
