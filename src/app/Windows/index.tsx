import * as Container from '@/ui/Container';

import { EditorWindow } from '../EditorWindow';
import { ResultWindow } from '../ResultWindow';

import './styles.css';

export const Windows = () => {
    return (
        <Container.Wrapper>
            <Container.Item>
                <EditorWindow />
            </Container.Item>

            <Container.Item>
                <ResultWindow />
            </Container.Item>
        </Container.Wrapper>
    );
};
