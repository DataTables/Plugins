/*! © Lokesh Babu - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Displays url data in hyperLink with custom plcaeholder */
        hyperLink(anchorText: 'newTab' | 'popup' | string, location: string, width: number, height: number): any;
    }
}
export {};
