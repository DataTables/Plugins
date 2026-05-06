/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface Config {
        mark?: boolean;
    }
    interface Defaults {
        mark?: boolean;
    }
}
declare global {
    interface Window {
        Mark: any;
    }
}
export {};
