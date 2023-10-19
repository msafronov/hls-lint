import * as Window from '@/ui/Window';

import { TitleBar } from './components/TitleBar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import './styles.css';

export const EditorWindow = () => {
    return (
        <Window.Wrapper
            size="md"
        >
            <TitleBar />
            <Content />
            <Footer />
        </Window.Wrapper>
    );
};
