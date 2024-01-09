/*! © Nick Adkinson, SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Match the number of rows in a table to the page length */
        SlidingChild(settings: any, options: typeof SlidingChild.defaults): void;
    }
    interface Config {
        slidingChild?: boolean;
    }
}
declare var SlidingChild: any;
export {};
