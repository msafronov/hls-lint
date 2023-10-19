import { render } from 'preact';
import { App } from './App';

import './styles.css';

const container = document.getElementById('app');

if (container !== null) {
    render(
        <App />,
        container,
    );
}
