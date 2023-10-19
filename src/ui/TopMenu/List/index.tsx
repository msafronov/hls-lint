import { JSX } from "preact/jsx-runtime";

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const List = (props: Props) => {
    return (
        <ul
            className="menu__list"
        >
            {props.children}
        </ul>
    );
};