/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface ApiPage {
        /** Change ordering of the table to its data load order */
        jumpToData(data: any): Api<any>;
    }
}
export {};
