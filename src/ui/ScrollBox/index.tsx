import { JSX } from "preact/jsx-runtime";

import './styles.css';

export type Props = {
    style: JSX.CSSProperties;
    children: JSX.Element | JSX.Element[];
};

export const ScrollBox = (props: Props) => {
    return (
        <div
            className="scroll-box"
            style={props.style}
        >
            {props.children}
        </div>
    );
};