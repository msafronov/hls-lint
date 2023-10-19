import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Item = (props: Props) => {
    return (
        <div
            className="container__item"
        >
            {props.children}
        </div>
    );
};
