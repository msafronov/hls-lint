import { JSX } from 'preact/jsx-runtime';
import clsx from 'clsx';

import './styles.css';

export type Props = {
    theme?: 'primary',
    size?: 'sm' | 'md' | 'lg';
    children: JSX.Element;
    loading?: boolean;
    disabled?: boolean;
    onClick: () => void;
};

export const Button = (props: Props) => {
    return (
        <button
            className={clsx('button', 'button_theme_primary', {
                [`button_size_${props.size}`]: props.size,
                [`disabled`]: props.disabled,
            })}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
