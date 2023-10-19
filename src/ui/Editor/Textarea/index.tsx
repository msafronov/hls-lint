import { JSX } from 'preact/jsx-runtime';

import { RichTextarea } from 'rich-textarea';
import { useCallback, useState } from 'preact/hooks';

import './styles.css';

export type Props = {
    onChange: (text: string) => void;
    children: (text: string) => JSX.Element | JSX.Element[];
};

const richTextareaStyles = {
    width: '100%',
    fontFamily: 'Garamond',
    fontSize: 18,
};

export const Textarea = (props: Props) => {
    const [text, setText] = useState<string>('');

    const onChangeHandler = useCallback((event: JSX.TargetedEvent<HTMLTextAreaElement>) => {
        // @ts-ignore ("value" exists on the target object)
        const value = event.target?.value;

        setText(value);
        props.onChange(value);
    }, []);

    return (
        <RichTextarea
            value={text}
            style={richTextareaStyles}
            spellcheck={false}
            className="editor__textarea"
            onChange={onChangeHandler}
        >
            {props.children}
        </RichTextarea>
    );
};
