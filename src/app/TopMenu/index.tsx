import { memo } from 'preact/compat';
import { useStore } from '@nanostores/preact';
import * as TopMenuUI from '@/ui/TopMenu';
import { Text } from '@/ui/Text';

import { $menuListStore } from './stores/menuListStore';

import { Time } from './components/Time';

import './styles.css';

export const TopMenu = memo(() => {
    const menuList = useStore($menuListStore);

    return (
        <TopMenuUI.Wrapper>
            <TopMenuUI.Item>
                <img src="/hls-lint/icons/logo.svg" alt="Logo" />

                <TopMenuUI.List>
                    {menuList.map((menuItem) => {
                        return (
                            <TopMenuUI.ListItem>
                                <Text weight="bold">{menuItem.title}</Text>
                            </TopMenuUI.ListItem>
                        )
                    })}
                </TopMenuUI.List>
            </TopMenuUI.Item>

            <TopMenuUI.Item paddingTop="sm">
                <Time />

                <TopMenuUI.ResizeIcon />

                <Text
                    tag="a"
                    href="https://github.com/msafronov/hls-lint"
                    target="blank"
                    textDecoration="none"
                    color="black"
                >
                    <TopMenuUI.ApplicationBar>
                        <TopMenuUI.GitHubIcon />
                        <Text weight="bold">HLS Lint</Text>
                    </TopMenuUI.ApplicationBar>
                </Text>
            </TopMenuUI.Item>
        </TopMenuUI.Wrapper>
    );
});
