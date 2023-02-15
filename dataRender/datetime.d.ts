/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Convert date / time source data into one suitable for display */
        moment(from: string, to?: string, locale?: string): any;
    }
}
export {};
