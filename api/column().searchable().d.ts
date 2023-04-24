/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface ApiColumnMethods {
        /** Get searchable flag for selected column */
        searchable(): boolean;
    }
    interface ApiColumnsMethods {
        /** Get searchable flag for selected columns */
        searchable(): Api<boolean>;
    }
}
export {};
