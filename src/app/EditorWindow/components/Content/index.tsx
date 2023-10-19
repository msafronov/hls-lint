import * as Window from '@/ui/Window';

import { ContentHeader } from './components/Header';
import { ContentBody } from './components/Body';

export const Content = () => {
    return (
        <Window.Content>
            <ContentHeader />
            <ContentBody />
        </Window.Content>
    );
};
