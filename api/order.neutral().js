/*! © SpryMedia Ltd - datatables.net/license - 3.1.4 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net')(root);

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net');

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


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
 * @requires DataTables 3+
 *
 * @returns {DataTables.Api} DataTables API instance
 *
 * @example
 *    // Return table to the loaded data order
 *    table.order.neutral().draw();
 */
DataTable.Api.register('order.neutral()', function () {
    return this.iterator('table', function (s) {
        s.order.length = 0;
        s.display.sort(function (a, b) {
            return a - b;
        });
        s.displayMaster.sort(function (a, b) {
            return a - b;
        });
    });
});


return DataTable;
}));
