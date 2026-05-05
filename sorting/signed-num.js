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


return DataTable;
}));
