import { JSX } from 'preact/jsx-runtime';
import './styles.css';

export type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Code = (props: Props) => {
    return (
        <pre
            className="data__code"
        >
            {props.children}
        </pre>
    );
};
