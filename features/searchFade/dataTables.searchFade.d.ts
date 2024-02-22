/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Search and Fade unmatching rows in a DataTables */
        SearchFade(settings: any): void;
    }
    interface Config {
        searchFade?: boolean;
    }
    interface Api<T> {
        searchFade: ApiSearchFade<T>;
    }
    interface ApiSearchFade<T> {
        (): ApiSearchFadeMethods<T>;
    }
    interface ApiSearchFadeMethods<T> extends Api<T> {
        node(): JQuery | null;
    }
    interface Feature {
        searchFade?: {};
    }
}
export {};
