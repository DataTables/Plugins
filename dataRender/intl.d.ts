/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Use the Intl Javascript API to render dates and times */
        intlDateTime(locale: string, options: Intl.DateTimeFormatOptions): any;
        /** Use the Intl Javascript API to render numbers */
        intlNumber(locale: string, options: Intl.NumberFormatOptions): any;
    }
}
export {};
