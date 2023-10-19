import clsx from 'clsx';

import './styles.css';
import { FC } from 'preact/compat';

export type Props = {
    tag?: 'a'| 'span' | 'div',
    href?: string;
    target?: 'blank';
    size?: 'sm' | 'md' | 'lg',
    weight?: 'bold',
    color?: 'black' | 'red' | 'white',
    textDecoration?: 'none';
    family?: 'lucida-grande' | 'garamond';
    children: any;
};

export const Text: FC<Props> = ({
    size = 'md',
    tag = 'span',
    weight,
    color,
    textDecoration,
    family,
    children,
    ...props
}) => {
    const Tag = tag;

    return (
        <Tag
            className={clsx('text', {
                [`text_size_${size}`]: size,
                [`text_weight_${weight}`]: weight,
                [`text_color_${color}`]: color,
                [`text_family_${family}`]: family,
                [`text_decoration_${textDecoration}`]: textDecoration,
            })}
            {...props}
        >
            {children}
        </Tag>
    );
};
