/*! © SpryMedia Ltd - datatables.net/license/mit */
/**
 * @summary     ScrollResize
 * @description Automatically alter the DataTables page length to fit the table
     into a container
 * @author      SpryMedia Ltd
 * @requires    DataTables 3+
 *
 * This feature plug-in for DataTables will automatically change the height of a
 * scrolling DataTable to fit inside its container. This can be particularly
 * useful for control panels and other interfaces which resize dynamically with
 * the user's browser window.
 *
 * Page resizing in DataTables can be enabled by using any one of the following
 * options:
 *
 * * Setting the `scrollResize` parameter in the DataTables initialisation to be
 *   true - i.e. `scrollResize: true`
 * * Setting the `scrollResize` parameter to be true in the DataTables defaults
 *   (thus causing all tables to have this feature) - i.e.
 *   `DataTable.defaults.scrollResize = true`.
 * * Creating a new instance: `new DataTable.ScrollResize( table );` where
 *   `table` is a DataTable's API instance.
 */
import { Api } from 'datatables.net';
declare module 'datatables.net' {
    interface DataTablesStatic {
        /**
         * Automatically alter the DataTables page length to fit the table into
         * a container
         */
        ScrollResize: typeof ScrollResize;
    }
    interface Defaults {
        scrollResize?: boolean;
    }
    interface Config {
        scrollResize?: boolean;
    }
}
declare class ScrollResize {
    private s;
    constructor(dt: Api);
    private _size;
    private _attach;
}
export {};
