import './styles.css';

export type Props = {
    onClick: (event: any) => any;
};

export const TitleBarCollapseIcon = (props: Props) => {
    return (
        <img
            className="window__title-bar-collapse-icon"
            src="/icons/collapse-window.svg"
            alt="Collapse"
            onClick={props.onClick}
        />
    );
};
