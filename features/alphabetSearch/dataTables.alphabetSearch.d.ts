/*! © SpryMedia Ltd - datatables.net/license */
interface AlphabetSearchOptions {
    column?: number;
    caseSensitive?: boolean;
    numbers?: boolean;
}
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Show an set of alphabet buttons alongside a table providing search input options */
        AlphabetSearch(settings: any): void;
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
        node(): JQuery | null;
        recalc(): Api<T>;
    }
    interface Feature {
        alphabetSearch?: AlphabetSearchOptions;
    }
}
export {};
