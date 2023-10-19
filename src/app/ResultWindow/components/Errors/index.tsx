import * as ErrorsUI from '@/ui/Errors';
import { ScrollBox } from '@/ui/ScrollBox';

import { ErrorsTable } from './components/ErrorsTable';

const scrollBoxStyles = {
    height: '40vh',
};

export const Errors = () => {
    return (
        <ErrorsUI.Wrapper>
            <ScrollBox
                style={scrollBoxStyles}
            >
                <ErrorsTable />
            </ScrollBox>
        </ErrorsUI.Wrapper>
    );
};
