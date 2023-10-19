import { JSX } from "preact/jsx-runtime";

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const ApplicationBar = (props: Props) => {
    return (
        <div
            className="menu__application-bar"
        >
            {props.children}
        </div>
    );
};