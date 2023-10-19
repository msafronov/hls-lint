import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const HeadRow = (props: Props) => {
    return (
        <div
            className="table__head-row"
        >
            {props.children}
        </div>
    );
};
