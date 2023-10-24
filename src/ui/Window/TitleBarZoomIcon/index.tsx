import './styles.css';

export type Props = {
    onClick: (event: any) => any;
};

export const TitleBarZoomIcon = (props: Props) => {
    return (
        <img
            className="window__title-bar-zoom-icon"
            src="/hls-lint/icons/zoom-window.svg"
            alt="Zoom"
            onClick={props.onClick}
        />
    );
};
