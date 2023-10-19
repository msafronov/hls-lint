import { JSX } from "preact/jsx-runtime";

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Wrapper = (props: Props) => {
    return (
        <div
            className="menu"
        >
            <div
                className="menu__internal"
            >
                {props.children}
            </div>
        </div>
    );
};