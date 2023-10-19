import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Content = (props: Props) => {
    return (
        <div className="window__content">
            {props.children}
        </div>
    );
};
