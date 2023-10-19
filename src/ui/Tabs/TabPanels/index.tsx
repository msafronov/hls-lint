import { TabPanels as ReachTabPanels } from '@reach/tabs';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const TabPanels = (props: Props) => {
    return (
        <ReachTabPanels
            // @ts-ignore
            className="tabs__tab-panels"
        >
            {props.children}
        </ReachTabPanels>
    );
};
