import { useCallback } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';

import './styles.css';

export type Option = {
    id: string;
    value: string;
};

export type Props = {
    options: Option[],
    onChange: (optionId: Option['id']) => void,
};

export const Select = (props: Props) => {
    const onChangeHandler = useCallback<JSX.GenericEventHandler<HTMLSelectElement>>((event) => {
        // @ts-ignore
        props.onChange(event.target.value);
    }, []);

    return (
        <select
            className="select"
            onChange={onChangeHandler}
        >
            {props.options.map((option) => {
                return (
                    <option value={option.id}>
                        {option.value}
                    </option>
                );
            })}
        </select>
    );
};
