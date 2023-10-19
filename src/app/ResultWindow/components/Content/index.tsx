import { useStore } from '@nanostores/preact';

import * as Window from '@/ui/Window';
import * as Tabs from '@/ui/Tabs';
import { Text } from '@/ui/Text';
import { Badge } from '@/ui/Badge';

import { $parseResultStore } from '@/app/EditorWindow/stores/parseResultStore';

import { Errors } from '../Errors';
import { Data } from '../Data';

export const Content = () => {
    const parseResult = useStore($parseResultStore);

    return (
        <Window.Content>
            <Window.ContentBody>
                <Tabs.Wrapper>
                    <Tabs.TabList>
                        <Tabs.Tab>
                            <>
                                <Text weight="bold">
                                    Errors
                                </Text>

                                {
                                    parseResult.errorsCount !== null && (
                                        <Badge
                                            theme={
                                                parseResult.errorsCount === 0
                                                    ? 'success'
                                                    : 'error'
                                            }
                                        >
                                            <Text
                                                size="sm"
                                                color="white"
                                            >
                                                {parseResult.errorsCount}
                                            </Text>
                                        </Badge>
                                    )
                                }
                            </>
                        </Tabs.Tab>
                        <Tabs.Tab>
                            <Text weight="bold">Data</Text>
                        </Tabs.Tab>
                    </Tabs.TabList>

                    <Tabs.TabPanels>
                        <Tabs.TabPanel>
                            <Errors />
                        </Tabs.TabPanel>
                        <Tabs.TabPanel>
                            <Data />
                        </Tabs.TabPanel>
                    </Tabs.TabPanels>
                </Tabs.Wrapper>
            </Window.ContentBody>
        </Window.Content>
    );
};
