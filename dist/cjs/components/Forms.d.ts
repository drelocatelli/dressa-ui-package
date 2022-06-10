/// <reference types="react" />
import { AppProps } from "../types/basicTypes";
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}
export declare function Form(props: FormProps): JSX.Element;
export declare namespace Form {
    var Group: typeof FormGroup;
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    style?: React.CSSProperties;
    bg?: ButtonColors;
}
export declare function Button(props: ButtonProps): JSX.Element;
export declare function FormGroup({ children }: AppProps): JSX.Element;
export declare enum ButtonColors {
    primary = "#90cdf4",
    secondary = "red"
}
export {};
