/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Automatically alter the DataTables page length to fit the table into a container */
        ScrollResize(settings: any): void;
    }
    interface Config {
        scrollResize?: boolean;
    }
}
export {};
