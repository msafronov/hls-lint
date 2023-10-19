import { TabPanel as ReactTabPanel } from '@reach/tabs';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const TabPanel = (props: Props) => {
    return (
        <ReactTabPanel
            // @ts-ignore
            className="tabs__tab-panel"
        >
            {props.children}
        </ReactTabPanel>
    );
};
