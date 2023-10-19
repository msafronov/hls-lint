import { JSX } from "preact/jsx-runtime";
import clsx from "clsx";

import './styles.css';

export type Props = {
    paddingTop?: 'sm',
    children: JSX.Element | JSX.Element[];
};

export const Item = (props: Props) => {
    return (
        <div
            className={clsx('menu__item', {
                [`menu__item_padding-top_${props.paddingTop}`]: props.paddingTop,
            })}
        >
            {props.children}
        </div>
    );
};