import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const TitleBarTitle = (props: Props) => {
    return (
        <div className="window__title-bar-title">
            {props.children}
        </div>
    );
};
