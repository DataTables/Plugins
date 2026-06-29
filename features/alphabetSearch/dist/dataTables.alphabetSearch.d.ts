/*! © SpryMedia Ltd - datatables.net/license */
/**
 * @name     AlphabetSearch
 * @summary Show an set of alphabet buttons alongside a table providing
 *     search input options
 * @author      SpryMedia Ltd
 * @copyright   Copyright SpryMedia Ltd.
 * @requires DataTables 3+
 *
 * License      MIT - http://datatables.net/license/mit
 *
 * Please see [this blog post](http://datatables.net/blog/2014-09-22).
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       top: 'alphabetSearch'
 *     }
 *   });
 */
import { Api, Context, Dom } from 'datatables.net';
interface AlphabetSearchOptions {
    column?: number;
    caseSensitive?: boolean;
    numbers?: boolean;
}
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Show an set of alphabet buttons alongside a table providing search input options */
        AlphabetSearch: typeof AlphabetSearch;
    }
    interface Config {
        alphabet?: AlphabetSearchOptions;
    }
    interface Api<T> {
        alphabetSearch: ApiAlphabet<T>;
    }
    interface ApiAlphabet<T> {
        (searchTerm: string): ApiAlphabetMethods<T>;
    }
    interface ApiAlphabetMethods<T> extends Api<T> {
        node(): Dom | null;
        recalc(): Api<T>;
    }
    interface Feature {
        alphabetSearch?: AlphabetSearchOptions;
    }
    interface Context {
        alphabetSearch: string;
        _alphabetSearch: AlphabetSearch;
        _alphabet: any;
        _alphabetOptions: AlphabetSearchOptions;
    }
    interface Options {
        alphabet: AlphabetSearchOptions;
    }
}
declare class AlphabetSearch {
    private _container;
    constructor(context: Context);
    node(): Dom<HTMLElement>;
    private bin;
    draw(table: Api, alphabet: Dom, options: AlphabetSearchOptions): void;
}
export {};
