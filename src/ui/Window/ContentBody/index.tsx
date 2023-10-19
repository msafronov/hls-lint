import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const ContentBody = (props: Props) => {
    return (
        <div className="window__content-body">
            {props.children}
        </div>
    );
};
