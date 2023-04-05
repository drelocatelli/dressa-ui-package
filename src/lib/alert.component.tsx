import './basic.scss';
import { css } from '@emotion/css';
import { ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
    button?: ReactNode;
    close: ReactNode
}

const Alert = (props: IProps) => {

    return (
        <div className={styles}>
            <label>
                <input type="checkbox" className="d-alert-button" />
                {props.button}
                
                <div className={`d-alert-wrapper`}>
                    <div style={{width: 'fit-content'}}>
                        {props.close}
                    </div>
                    <div onClick={e => e.preventDefault()}>
                        {props.children}
                    </div>
                </div>
            </label>
        </div>
    );
};

const styles = css`
    label {
        .d-alert-button {
            display: none;
            &:checked + .d-alert-wrapper {
                opacity: 1;
                pointer-events: all;
            }
        }

        .d-alert-wrapper {
            opacity: 0;
            pointer-events: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export default Alert;
