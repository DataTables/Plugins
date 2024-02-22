/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Page length control via links for DataTables */
        LengthLinks(settings: any): void;
    }
    interface Feature {
        lengthLinks?: {};
    }
}
export {};
