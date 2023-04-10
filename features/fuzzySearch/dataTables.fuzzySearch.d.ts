/*!
 * Fuzzy Search for DataTables
 * 2021 SpryMedia Ltd - datatables.net/license MIT license
 *
 * Damerau-Levenshtein function courtesy of https://github.com/tad-lispy/node-damerau-levenshtein
 * BSD 2-Clause License
 * Copyright (c) 2018, Tadeusz Łazurski
 * All rights reserved.
 */
declare module 'datatables.net' {
    interface Config {
        fuzzySearch?: boolean | {
            rankColumn?: number;
            threshold?: number;
            toggleSmart?: boolean;
        };
    }
    interface State {
        _fuzzySearch: {
            active: 'true' | 'false';
            val: any;
        };
    }
}
export {};
