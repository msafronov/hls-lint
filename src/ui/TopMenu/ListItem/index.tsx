import { JSX } from "preact/jsx-runtime";

import './styles.css';

export type Props = {
    children: JSX.Element;
};

export const ListItem = (props: Props) => {
    return (
        <li
            className="menu__list-item"
        >
            {props.children}
        </li>
    );
};