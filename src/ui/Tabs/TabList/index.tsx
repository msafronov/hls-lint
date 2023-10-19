import { TabList as ReactTabList } from '@reach/tabs';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const TabList = (props: Props) => {
    return (
        <ReactTabList
            // @ts-ignore
            className="tabs__tab-list"
        >
            <div className="tabs__tab-list-internal">{' '}</div>

            {props.children}
        </ReactTabList>
    );
};
