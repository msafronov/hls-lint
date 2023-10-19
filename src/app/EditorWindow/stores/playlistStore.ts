import { atom } from 'nanostores'

export type Playlist = string;

export const $playlistStore = atom<Playlist>('');
