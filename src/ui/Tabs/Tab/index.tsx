import { Tab as ReactTab } from '@reach/tabs';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Tab = (props: Props) => {
    return (
        <ReactTab
            // @ts-ignore
            className="tabs__tab"
        >
            {props.children}
        </ReactTab>
    );
};
