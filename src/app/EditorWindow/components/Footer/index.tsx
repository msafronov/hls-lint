import { memo } from 'preact/compat';
import { parsePlaylist } from '../../actions/parserActions';

import * as Window from '@/ui/Window';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';

export const Footer = memo(() => {
    return (
        <Window.Footer>
            <Button
                onClick={parsePlaylist}
                theme="primary"
            >
                <Text weight="bold">
                    Parse HLS Playlist
                </Text>
            </Button>
        </Window.Footer>
    );
});
