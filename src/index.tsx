import { render } from 'preact';
import { App } from './app';

import './styles.css';

const container = document.getElementById('app');

if (container !== null) {
    render(
        <App />,
        container,
    );
}
