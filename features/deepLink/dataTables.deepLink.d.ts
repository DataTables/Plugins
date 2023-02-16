/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticExt {
        /** Deep linking options parsing support for DataTables */
        deepLink(whitelist: 'all' | string[]): any;
    }
}
export {};
