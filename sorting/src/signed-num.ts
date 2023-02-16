/*! © SpryMedia Ltd - datatables.net/license */

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
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'signed-num', targets: 0 }
 *       ]
 *    } );
 */

import DataTable from 'datatables.net';

DataTable.ext.order['signed-num-pre'] = function (a) {
	return a == '-' || a === '' ? 0 : a.replace('+', '') * 1;
};
