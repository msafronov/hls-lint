import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element;
};

export const Wrapper = (props: Props) => {
    return (
        <div
            className="editor"
        >
            {props.children}
        </div>
    );
};
