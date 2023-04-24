/*! © SpryMedia Ltd - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * The plug-in provides a way to determine the searchable state of one or more
 * columns, as was configured by the `-init columns.searchable` option.
 *
 * @name columns().order()
 * @summary Apply multi-column ordering through the columns() API method.
 * @author [Allan Jardine](http://sprymedia.co.uk)
 * @requires DataTables 1.10+
 *
 * @returns {boolean|DataTables.Api} Searchable flag
 *
 * @example
 *  // Get the searchable flag for all columns
 *  table.columns().searchable().toArray()
 *
 * @example
 *  // Get the searchable flag for column index 0
 *  table.column(0).searchable()
 */
DataTable.Api.registerPlural('columns().searchable()', 'column().searchable()', function (selector, opts) {
    return this.iterator('column', function (settings, column) {
        return settings.aoColumns[column].bSearchable;
    }, 1);
});


export default DataTable;
