/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Deep linking options parsing support for DataTables */
        deepLink(whitelist: 'all' | string[]): Options;
    }
}
export {};
