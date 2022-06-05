import styled, { CSSProperties } from "styled-components";
import { AppProps } from "../../types/basicTypes";

interface BoxProps extends AppProps {
    bg?: string;
    width?: string;
    height?: string;
}

export default function Box(props : BoxProps) {
    return(
        <BoxStyle {...props}>
            {props.children}
        </BoxStyle>        
    );
}
const BoxStyle = styled.div<BoxProps>`
    padding: 1rem;
    background: ${(props) => (props.bg != undefined) ? props.bg : 'transparent'};
    width: ${(props) => (props.width != undefined) ? props.width : 'auto'};
    height: ${(props) => (props.height != undefined) ? props.height : 'auto'};

`;