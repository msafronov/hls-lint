import './styles.css';

export type Props = {
    onClick: (event: any) => any;
};

export const TitleBarCloseIcon = (props: Props) => {
    return (
        <img
            className="window__title-bar-close-icon"
            src="/hls-lint/icons/close-window.svg"
            alt="Close"
            onClick={props.onClick}
        />
    );
};
