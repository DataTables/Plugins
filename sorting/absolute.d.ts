/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Define an absolute sort with string based sorting */
        absoluteOrder(values: any[]): any;
        /** Define an absolute sort with number based sorting */
        absoluteOrderNumber(values: any[]): any;
    }
}
export {};
