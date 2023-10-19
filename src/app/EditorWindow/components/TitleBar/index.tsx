import { memo, useCallback } from 'preact/compat';

import * as Window from '@/ui/Window';
import { Text } from '@/ui/Text';

export const TitleBar = memo(() => {
    const closeHandler = useCallback(() => {}, []);
    // const zoomHandler = useCallback(() => {}, []);
    const collapseHandler = useCallback(() => {}, []);

    return (
        <Window.TitleBar>
            <Window.TitleBarCloseIcon
                onClick={closeHandler}
            />

            <Window.TitleBarHorizontalBars />

            <Window.TitleBarTitle>
                <Text
                    weight="bold"
                >
                    HLS Lint
                </Text>
            </Window.TitleBarTitle>

            <Window.TitleBarHorizontalBars />

            {/* <Window.TitleBarZoomIcon
                onClick={zoomHandler}
            /> */}

            <Window.TitleBarCollapseIcon
                onClick={collapseHandler}
            />
        </Window.TitleBar>
    );
});
