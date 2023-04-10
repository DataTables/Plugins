/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Restrict output data to a particular length, showing anything longer with ellipsis */
        ellipsis(cutoff: number, wordbreak?: boolean, escapeHtml?: boolean): any;
    }
}
export {};
