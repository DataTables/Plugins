/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Automatically alter the DataTables page length to fit the table into a container */
        PageResize(settings: any, pageResizeManualDelta: boolean): void;
    }
    interface Config {
        pageResize?: boolean;
        pageResizeManualDelta?: boolean;
    }
}
export {};
