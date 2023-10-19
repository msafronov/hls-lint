import { useStore } from '@nanostores/preact';

import { $parseResultStore } from '@/app/EditorWindow/stores/parseResultStore';

import { ScrollBox } from '@/ui/ScrollBox';
import * as DataUI from '@/ui/Data';
import { Text } from '@/ui/Text';

const scrollBoxStyles = {
    height: '40vh',
};

export const Data = () => {
    const parseResult = useStore($parseResultStore);

    return (
        <DataUI.Wrapper>
            <ScrollBox
                style={scrollBoxStyles}
            >
                <DataUI.Code>
                    <Text
                        family="garamond"
                        size="lg"
                    >
                        {JSON.stringify({
                            main: parseResult.metadata,
                            playlist: parseResult.playlist,
                            variantStreams: parseResult.variantStreams,
                            mediaSegments: parseResult.mediaSegments,
                        }, null, 4)}
                    </Text>
                </DataUI.Code>
            </ScrollBox>
        </DataUI.Wrapper>
    );
};
