import * as Window from '@/ui/Window';
import { Text } from '@/ui/Text';

export const ContentHeader = () => {
    return (
        <Window.ContentHeader>
            <Text
                size="sm"
            >
                rfc8216 v13 (WIP: <Text
                    tag="a"
                    color="black"
                    href="https://github.com/msafronov/m3u8-composer/blob/main/docs/tags-and-attributes-support/rfc8216-v13.md"
                    target="blank"
                    size="sm"
                >
                    see details
                </Text>)
            </Text>
        </Window.ContentHeader>
    );
};
