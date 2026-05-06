/*! © SpryMedia Ltd - datatables.net/license */
/**
 * @summary     RowFill
 * @description Match the number of rows in a table to the page length
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * This feature plug-in for DataTables will automatically insert temporary rows
 * into a DataTable that draws a page that is less than the configured page
 * length. This can be handy to ensure that your table always as (e.g.) 10 rows
 * visible.
 *
 * Filler rows have the class `dt-rowFill--filler` assigned to them allowing for
 * additional styling (e.g. reducing opacity).
 *
 * To enable for a table add `rowFill: true` to your DataTables configuration:
 *
 * ```js
 * const table = new DataTable('#myTable', {
 *   rowFill: true
 * });
 * ```
 */
import { Api } from 'datatables.net';
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Match the number of rows in a table to the page length */
        RowFill: typeof RowFill;
    }
    interface Config {
        rowFill?: boolean;
    }
    interface Defaults {
        rowFill?: boolean;
    }
}
declare class RowFill {
    private s;
    constructor(dt: Api);
    private _attach;
}
export {};
