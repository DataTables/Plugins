/*! © SpryMedia Ltd - datatables.net/license */

import $ from 'jquery';
import DataTable from 'datatables.net';

/**
 * This plug-in will provide numeric sorting for numeric columns which have
 * extra formatting, such as thousands separators, currency symbols or any other
 * non-numeric data.
 *
 * By default when a cell is found to have no numeric data its value is sorted
 * numerically as if its value were 0. This could also be altered to be Inifnity
 * or -Infinity as required.
 *
 * DataTables 1.10+ has formatted number detection and sorting abilities built-
 * in. As such this plug-in is marked as deprecated, but might be useful when
 * working with old versions of DataTables.
 *
 *  @name Formatted numbers
 *  @summary Sort numbers which are displayed with thousand separators
 *  @deprecated
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'formatted-num', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.order['formatted-num-pre'] = function (a) {
    a = a === '-' || a === '' ? 0 : a.replace(/[^\d\-\.]/g, '');
    return parseFloat(a);
};


export default DataTable;
