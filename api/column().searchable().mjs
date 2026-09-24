/*! © SpryMedia Ltd - datatables.net/license - 3.1.1 */

import DataTable from 'datatables.net';

/**
 * The plug-in provides a way to determine the searchable state of one or more
 * columns, as was configured by the `-init columns.searchable` option.
 *
 * @name columns().searchable()
 * @summary Get the orderable state for one or more columns
 * @author [Allan Jardine](http://sprymedia.co.uk)
 * @requires DataTables 3+
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
DataTable.Api.registerPlural('columns().searchable()', 'column().searchable()', function () {
    return this.iterator('column', function (settings, column) {
        return settings.columns[column].searchable;
    }, true);
});


export default DataTable;

