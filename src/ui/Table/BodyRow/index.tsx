import { JSX } from 'preact/jsx-runtime';

import './styles.css';
import clsx from 'clsx';

export type Props = {
    clickable?: boolean;
    children: JSX.Element | JSX.Element[];
};

export const BodyRow = (props: Props) => {
    return (
        <div
            className={clsx('table__body-row', {
                'table__body-row_clickable': props.clickable,
            })}
        >
            {props.children}
        </div>
    );
};
