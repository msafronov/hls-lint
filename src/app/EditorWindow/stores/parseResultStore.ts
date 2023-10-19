import { atom } from 'nanostores'

export type ParseResultError = {
    row: number;
    col: number;
    isValidated: boolean;
    keyword: string;
    message: string;
    origin: string;
    relatesTo: string;
    value: any;
};

export type ParseResultErrors = Record<string, ParseResultError[]>;

export type ParseResult = {
    mediaSegments: Record<string, any>[];
    variantStreams: Record<string, any>[];
    playlist: Record<string, any>;
    metadata: Record<string, any>;
    errors: ParseResultErrors;
    errorsCount: number | null,
};

export const initialParseResult = {
    mediaSegments: [],
    variantStreams: [],
    playlist: {},
    metadata: {},
    errors: {},
    errorsCount: null,
};

export const $parseResultStore = atom<ParseResult>({
    ...initialParseResult,
});
