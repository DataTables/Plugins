/*! © SpryMedia Ltd - datatables.net/license */
/**
 * This feature will fade out rows which don't match from the input
 *
 * @summary     SearchFade
 * @description Search and Fade unmatching rows in a DataTables
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'searchFade'
 *     }
 *   });
 */
import { Context, Dom } from 'datatables.net';
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Search and Fade unmatching rows in a DataTables */
        SearchFade: typeof SearchFade;
    }
    interface Options {
        searchFade?: boolean;
    }
    interface Defaults {
        searchFade?: boolean;
    }
    interface Api<T> {
        searchFade: ApiSearchFade<T>;
    }
    interface ApiSearchFade<T> {
        (): ApiSearchFadeMethods<T>;
    }
    interface ApiSearchFadeMethods<T> extends Api<T> {
        node(): Dom | null;
    }
    interface Feature {
        searchFade?: {};
    }
    interface Context {
        searchFadeNode: Dom;
    }
}
declare class SearchFade {
    private searchFade;
    private input;
    constructor(settings: Context);
    node(): Dom<HTMLElement>;
}
export {};
