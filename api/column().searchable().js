/*! © SpryMedia Ltd - datatables.net/license - 3.0.0-beta.2 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


/**
 * The plug-in provides a way to determine the searchable state of one or more
 * columns, as was configured by the `-init columns.searchable` option.
 *
 * @name columns().order()
 * @summary Apply multi-column ordering through the columns() API method.
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


return DataTable;
}));
