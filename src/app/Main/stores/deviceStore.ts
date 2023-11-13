import { atom } from 'nanostores'

export type Device = {
    portrait: boolean;
};

export const $deviceStore = atom<Device>({
    portrait: false,
});
