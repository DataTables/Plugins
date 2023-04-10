/*! © Edouard Labre - datatables.net/license */
declare module 'datatables.net' {
    interface ApiRowMethods<T> {
        /** See the row in datable by display the right pagination page */
        show(): Api<T>;
    }
}
export {};
