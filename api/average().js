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
 * It can sometimes be useful to get the average of data in an API result set,
 * be it from a column, or a collection of cells. This method provides exactly
 * that ability.
 *
 * @name average()
 * @summary Average the values in a data set.
 * @author [Allan Jardine](http://sprymedia.co.uk)
 * @requires DataTables 1.10+
 *
 * @returns {Number} Calculated average
 *
 * @example
 *    // Average a column
 *    var table = new DataTable('#example')
 *    table.column( 3 ).data().average();
 *
 * @example
 *    // Average two cells
 *    var table = new DataTable('#example')
 *    table.cells( 0, [3,4] ).data().average();
 */
DataTable.Api.register('average()', function () {
    var data = this.flatten();
    var sum = data.reduce(function (a, b) {
        return a * 1 + b * 1; // cast values in-case they are strings
    }, 0);
    return sum / data.length;
});


return DataTable;
}));
