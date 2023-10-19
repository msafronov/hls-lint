import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Footer = (props: Props) => {
    return (
        <div className="window__footer">
            {props.children}
        </div>
    );
};
