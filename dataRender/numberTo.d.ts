/*! © SpryMedia Ltd, Alireza Mohammadi Doost - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Convert numbers to Farsi, English or Arabic. */
        numberTo(string: 'fa' | 'en' | 'ar'): any;
    }
}
export {};
