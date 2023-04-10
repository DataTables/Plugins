/*! © Drijkoningen Dirk - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStaticRender {
        /** Display percentage value as a bar */
        percentBar(pShape: string, cText: string, cBorder: string, cBar: string, cBack: string, vRound: number, bType: string): any;
    }
}
export {};
