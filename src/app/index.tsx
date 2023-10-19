import * as Container from '@/ui/Container';

import { TopMenu } from './TopMenu';
import { EditorWindow } from './EditorWindow';
import { ResultWindow } from './ResultWindow';

import './styles.css';

export const App = () => {
    return (
        <>
            <TopMenu />

            <Container.Wrapper>
                <Container.Item>
                    <EditorWindow />
                </Container.Item>

                <Container.Item>
                    <ResultWindow />
                </Container.Item>
            </Container.Wrapper>
        </>
    );
};
