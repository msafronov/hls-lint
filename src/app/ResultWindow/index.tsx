import * as Window from '@/ui/Window';

import { TitleBar } from './components/TitleBar';
import { Content } from './components/Content';

import './styles.css';

export const ResultWindow = () => {
    return (
        <Window.Wrapper
            size="sm"
        >
            <TitleBar />
            <Content />
        </Window.Wrapper>
    );
};
