import { $playlistStore } from '../stores/playlistStore';

export const savePlaylist = (playlist: string) => {
    $playlistStore.set(playlist);
};
