import { JSX } from 'preact/jsx-runtime';
import clsx from 'clsx';

import './styles.css';

export type Props = {
    size?: number;
    selected?: boolean;
    centered?: boolean;
    children: JSX.Element | JSX.Element[];
};

export const BodyCol = (props: Props) => {
    return (
        <div
            className={clsx('table__body-col', {
                [`table__body-col_size_${props.size}`]: props.size,
                'table__body-col_selected': props.selected,
                'table__body-col_centered': props.centered,
            })}
        >
            {props.children}
        </div>
    );
};
