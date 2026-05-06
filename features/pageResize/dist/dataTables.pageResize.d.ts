/*! © SpryMedia Ltd - datatables.net/license */
/**
 * @summary     PageResize
 * @description Automatically alter the DataTables page length to fit the table
 *   into a container
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * This feature plug-in for DataTables will automatically change the DataTables
 * page length in order to fit inside its container. This can be particularly
 * useful for control panels and other interfaces which resize dynamically with
 * the user's browser window instead of scrolling.
 *
 * Page resizing in DataTables can be enabled by using any one of the following
 * options:
 *
 * * Adding the class `pageResize` to the HTML table
 * * Setting the `pageResize` parameter in the DataTables initialisation to be
 *   true - i.e. `pageResize: true`
 * * Setting the `pageResize` parameter to be true in the DataTables defaults
 *   (thus causing all tables to have this feature) - i.e.
 *   `DataTable.defaults.pageResize = true`.
 * * Creating a new instance: `new DataTable.PageResize( table );` where `table`
 *   is a DataTable's API instance.
 *
 * For more detailed information please [see this blog
 * post](http://datatables.net/blog/2015-04-10).
 */
import { Api } from 'datatables.net';
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Automatically alter the DataTables page length to fit the table into a container */
        PageResize: typeof PageResize;
    }
    interface Config {
        pageResize?: boolean;
        pageResizeManualDelta?: number;
    }
    interface Defaults {
        pageResize?: boolean;
        pageResizeManualDelta?: number;
    }
}
declare class PageResize {
    private s;
    private sizes;
    constructor(dt: Api, pageResizeManualDelta?: number);
    private _size;
    private _attach;
    _getOffsetTop(): number;
    private _getTableHeight;
    private _getContainerHeight;
    private _getHeaderHeight;
    private _getFooterHeight;
}
export {};
