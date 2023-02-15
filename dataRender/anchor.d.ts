/*! © Fedonyuk Anton - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Renders the column data as HTML anchor (`a` tag) */
        anchor(type: string, attribute: {
            [key: string]: any;
        }, innerText: string | null): any;
    }
}
export {};
