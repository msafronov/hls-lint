import { $deviceStore } from '../stores/deviceStore';

const isPortrait = (mediaQueryList: MediaQueryList) => {
    return mediaQueryList.matches;
};

const portraitOrientationChangeHandler = (event: MediaQueryListEvent) => {
    const mediaQueryList = event.target as MediaQueryList;

    $deviceStore.set({
        ...$deviceStore.get(),
        portrait: isPortrait(mediaQueryList),
    });
};

const subscribePortraitOrientationChange = (portraitMediaQueryList: MediaQueryList) => {
    portraitMediaQueryList.addEventListener('change', portraitOrientationChangeHandler);
};

const unsubscribePortraitOrientationChange = (portraitMediaQueryList: MediaQueryList) => {
    portraitMediaQueryList.removeEventListener('change', portraitOrientationChangeHandler);
};

export const initDevice = () => {
    const portraitMediaQueryList = window.matchMedia("(orientation: portrait)");

    $deviceStore.set({
        portrait: isPortrait(portraitMediaQueryList),
    });

    return {
        subscribeDeviceEvents: () => {
            subscribePortraitOrientationChange(portraitMediaQueryList);
        },
        unsubscribeDeviceEvents: () => {
            unsubscribePortraitOrientationChange(portraitMediaQueryList);
        },
    };
};
