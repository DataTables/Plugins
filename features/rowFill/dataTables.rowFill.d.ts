/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Match the number of rows in a table to the page length */
        RowFill(settings: any): void;
    }
    interface Config {
        rowFill?: boolean;
    }
}
export {};
