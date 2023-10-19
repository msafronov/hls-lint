import { Tabs } from '@reach/tabs';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Wrapper = (props: Props) => {
    return (
        <Tabs
            // @ts-ignore
            className="tabs"
        >
            {props.children}
        </Tabs>
    );
};
