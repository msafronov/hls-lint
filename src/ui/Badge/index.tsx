import { JSX } from 'preact/jsx-runtime';

import './styles.css';
import clsx from 'clsx';

export type Props = {
    theme?: 'success' | 'error';
    children: JSX.Element;
};

export const Badge = (props: Props) => {
    return (
        <span
            className={clsx('badge', {
                [`badge_theme_${props.theme}`]: props.theme,
            })}
        >
            {props.children}
        </span>
    );
};
