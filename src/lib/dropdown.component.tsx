import './basic.scss';
import {css} from '@emotion/css';
import { ReactNode, useCallback, useState } from 'react';

interface IDropDown {
    children?: ReactNode,
    fx?: boolean
}


const DropDown = (props: IDropDown) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setOpen(state => !state);
    }, [open]);

    return(
        <div className={`d-dropdown ${styles}`} onClick={toggleMenu}>
            <div className={`d-dropdown-wrapper ${open ? 'active' : ''}`}>
                {props.children}
            </div>
        </div>
    );
}

const DropDownContent = (props: IDropDown) => {
    return(
        <div className={'d-dropdown-content'}>
            {props.children}
        </div>
    );
}

const styles = css`
    width: max-content;
    position: relative;

    .d-dropdown-wrapper.active {
        .d-dropdown-content {
            opacity: 1;
            pointer-events: all;
        }
    }
    
    .d-dropdown-content {
        opacity: 0;
        pointer-events: none;
        position: absolute;
    }

`;

DropDown.Content = DropDownContent;
export default DropDown;