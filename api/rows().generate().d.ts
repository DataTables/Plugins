/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface ApiRowsMethods<T> {
        /** Create tr elements for rows which have not yet had their nodes created. */
        generate(): Api<T>;
    }
}
export {};
