import clsx from 'clsx';

import './styles.css';

export type Props = {
    error?: boolean;
    value?: string,
};

export const TextareaLine = (props: Props) => {
    return (
        <div
            className={clsx('editor__textarea-line', {
                'editor__textarea-line_error': props.error,
            })}
        >
            {props.value || ' '}
        </div>
    );
};
