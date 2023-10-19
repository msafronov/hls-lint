import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const ContentHeader = (props: Props) => {
    return (
        <div className="window__content-header">
            <div className="window__content-header-internal">
                {props.children}
            </div>
        </div>
    );
};
