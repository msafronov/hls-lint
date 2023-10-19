import { useStore } from '@nanostores/preact';

import * as Editor from '@/ui/Editor';
import * as Window from '@/ui/Window';

import { $parseResultStore } from '@/app/EditorWindow/stores/parseResultStore';
import { clear } from '@/app/EditorWindow/actions/parserActions';
import { savePlaylist } from '@/app/EditorWindow/actions/playlistActions';

export const ContentBody = () => {
    const parseResult = useStore($parseResultStore);

    return (
        <Window.ContentBody>
            <Editor.Wrapper>
                <Editor.Textarea
                    onChange={(text: string) => {
                        savePlaylist(text);
                        clear();
                    }}
                >
                    {(text: string) => {
                        return text.split('\n').map((value: string, idx: number) => {
                            return (
                                <Editor.TextareaLine
                                    value={value}
                                    error={parseResult.errors[idx] !== undefined}
                                />
                            );
                        });
                    }}
                </Editor.Textarea>
            </Editor.Wrapper>
        </Window.ContentBody>
    );
};
