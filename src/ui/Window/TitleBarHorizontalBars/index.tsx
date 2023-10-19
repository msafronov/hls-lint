import './styles.css';

export const TitleBarHorizontalBars = () => {
    return (
        <div className="window__title-bar-horizontal-bars">
            <div
                className="window__title-bar-horizontal-bar window__title-bar-horizontal-bar_left"
            />
            <div
                className="window__title-bar-horizontal-bar window__title-bar-horizontal-bar_right"
            />
        </div>
    );
};
