// @ts-ignore
import { interpreter } from 'm3u8-composer/interpreter/m3u8-to-schema';
// @ts-ignore
import { createSchema } from 'm3u8-composer/schema/rfc8216-v13';
// @ts-ignore
import { extendedLogsFeature } from 'm3u8-composer/features/extended-logs';

import { $parseResultStore, initialParseResult } from '../stores/parseResultStore';
import { $playlistStore } from '../stores/playlistStore';

export const parsePlaylist = () => {
    const schema = createSchema();

    interpreter($playlistStore.get(), schema);

    extendedLogsFeature(schema);

    const errors = {};

    let errorsCount = 0;

    Object.keys(schema.logs).forEach((logsKey) => {
        const log = schema.logs[logsKey];

        errorsCount++;

        // @ts-ignore
        if (errors[log.row] === undefined) {
            // @ts-ignore
            errors[log.row] = [log];
        } else {
            // @ts-ignore
            errors[log.row].push(log);
        }
    });

    $parseResultStore.set({
        ...schema,
        errors,
        errorsCount,
    });
};

export const clear = () => {
    return $parseResultStore.set({
        ...initialParseResult,
    });
};