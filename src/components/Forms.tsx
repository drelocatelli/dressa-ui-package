import React from "react";
import styled from "styled-components";
import { AppProps } from "../types/basicTypes";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}

export default function Form(props: FormProps) {
    return (
        <FormStyled>
            <form {...props}>
                {props.children}
            </form>
        </FormStyled>
    );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    style?: React.CSSProperties;
    bg?: ButtonColors;
}

export function Button(props: ButtonProps) {
    return <ButtonStyled style={props.style} bg={props.bg}>{props.children}</ButtonStyled>;
}

export function FormGroup({ children }: AppProps) {
    return (
        <>
            {children}
        </>
    );

}

//* -------------------------- childs

Form.Group = FormGroup;

export enum ButtonColors {
    primary = '#90cdf4',
    secondary = 'red'
}

const ButtonStyled = styled.button`
    padding:0 1rem;
    border-radius: 0.375rem;
    margin: 3px;
    background: ${(props: ButtonProps) => props.bg};
    height: 2.5rem;
    box-sizing:border-box;
    border:0;
    outline: 0;
    opacity: .9;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:active {
        opacity: .8;

    }
`;

const FormStyled = styled.div`
    display: flex;
`;