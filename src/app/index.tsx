import { Main } from './Main';
import { TopMenu } from './TopMenu';
import { Windows } from './Windows';

import './styles.css';

export const App = () => {
    return (
        // @ts-ignore
        <Main>
            <TopMenu />
            <Windows />
        </Main>
    );
};
