import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Container = (props: Props) => {
    return (
        <div
            className="errors__container"
        >
            {props.children}
        </div>
    );
};
