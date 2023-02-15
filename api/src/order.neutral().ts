/*! © SpryMedia Ltd - datatables.net/license */

/**
 * This function will restore the order in which data was read into a DataTable
 * (for example from an HTML source). Although you can set `dt-api order()` to
 * be an empty array (`[]`) in order to prevent sorting during initialisation,
 * it can sometimes be useful to restore the original order after sorting has
 * already occurred - which is exactly what this function does.
 *
 * Please note that this plug-in can only be used for client-side processing
 * tables (i.e. without `serverSide: true`).
 *
 * @name order.neutral()
 * @summary Change ordering of the table to its data load order
 * @author [Allan Jardine](http://datatables.net)
 * @requires DataTables 1.10+
 *
 * @returns {DataTables.Api} DataTables API instance
 *
 * @example
 *    // Return table to the loaded data order
 *    table.order.neutral().draw();
 */

import DataTable from 'datatables.net';

declare module 'datatables.net' {
	interface ApiOrder {
		/** Change ordering of the table to its data load order */
		neutral(): Api<any>;
	}
}

DataTable.Api.register('order.neutral()', function () {
	return this.iterator('table', function (s) {
		s.aaSorting.length = 0;
		s.aiDisplay.sort(function (a, b) {
			return a - b;
		});
		s.aiDisplayMaster.sort(function (a, b) {
			return a - b;
		});
	});
});
