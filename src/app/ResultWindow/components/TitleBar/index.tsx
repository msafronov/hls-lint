import { memo, useCallback } from 'preact/compat';

import * as Window from '@/ui/Window';
import { Text } from '@/ui/Text';

export const TitleBar = memo(() => {
    const closeHandler = useCallback(() => {}, []);
    const collapseHandler = useCallback(() => {}, []);

    return (
        <Window.TitleBar>
            <Window.TitleBarCloseIcon
                onClick={closeHandler}
            />

            <Window.TitleBarHorizontalBars />

            <img src="/hls-lint/icons/analysis.svg" alt="Result window icon" />

            <Window.TitleBarTitle>
                <Text
                    weight="bold"
                >
                    Result
                </Text>
            </Window.TitleBarTitle>

            <Window.TitleBarHorizontalBars />

            <Window.TitleBarCollapseIcon
                onClick={collapseHandler}
            />
        </Window.TitleBar>
    );
});
