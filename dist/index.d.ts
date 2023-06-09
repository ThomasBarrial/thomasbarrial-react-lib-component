/// <reference types="react" />
interface ButtonClassicProps {
    label: string;
    backgroundColor: string;
    color: string;
    isBold: boolean;
}
declare const ButtonClassic: (props: ButtonClassicProps) => JSX.Element;

interface IProps {
    label: string;
}
declare const CardClassic: (props: IProps) => JSX.Element;

export { ButtonClassic, CardClassic };
