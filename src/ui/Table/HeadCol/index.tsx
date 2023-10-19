import { JSX } from 'preact/jsx-runtime';
import clsx from 'clsx';

import './styles.css';

export type Props = {
    size?: number;
    children: JSX.Element | JSX.Element[];
};

export const HeadCol = (props: Props) => {
    return (
        <div
            className={clsx('table__head-col', {
                [`table__head-col_size_${props.size}`]: props.size,
            })}
        >
            <div
                className="table__head-col-internal"
            >
                {props.children}
            </div>
        </div>
    );
};
