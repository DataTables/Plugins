/*! © SpryMedia Ltd - datatables.net/license - 3.0.0-beta.2 */

import DataTable from 'datatables.net';

/**
 * Although DataTables' internal numeric sorting works no problem on negative
 * numbers, it does not accept positively signed numbers. This plug-in will
 * sort just such data numerically.
 *
 *  @name Fully signed numbers sorting
 *  @summary Sort data numerically with a leading `+` symbol (as well as `-`).
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *     new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'signed-num', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['signed-num-pre'] = function (a) {
    return a == '-' || a === '' ? 0 : a.replace('+', '') * 1;
};


export default DataTable;

