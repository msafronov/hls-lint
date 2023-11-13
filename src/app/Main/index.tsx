import { useEffect } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';

import { initDevice } from './actions/deviceActions';

import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Main = (props: Props): JSX.Element | JSX.Element[] => {
    useEffect(() => {
        const { subscribeDeviceEvents, unsubscribeDeviceEvents } = initDevice();

        subscribeDeviceEvents();

        return () => {
            unsubscribeDeviceEvents();
        };
    }, []);

    return props.children;
};
