/*! © Ulises Gomez / Gravity Lending, SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Add an input box that will remove matching items from the table */
        ExcludeSearch(settings: any): void;
    }
    interface Config {
        alphabet?: {
            column: number;
            caseSensitive: boolean;
            numbers: boolean;
        };
    }
    interface Api<T> {
        /** Set an exclude term */
        excludeSearch(searchTerm: string): Api<T>;
    }
}
export {};
