import clsx from 'clsx';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    size?: 'sm' | 'md' | 'lg';
    children: JSX.Element | JSX.Element[];
};

export const Wrapper = (props: Props) => {
    return (
        <div
            className={clsx('window', {
                [`window_size_${props.size}`]: props.size,
            })}
        >
            <div class="window__internal">
                {props.children}
            </div>
        </div>
    );
};
