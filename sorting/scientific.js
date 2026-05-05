/*! © SpryMedia Ltd, Nick Schurch - datatables.net/license - 3.0.0-beta.2 */

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
 * This plug-in will treat numbers which are in scientific notation (for
 * example `1E-10`, `1.2E6` etc) and sort them numerically.
 *
 *  @name Scientific notation sorting
 *  @summary Sort data which is written in exponential notation.
 *  @author [Nick Schurch](http://datatables.net/forums/profile/21757/nickschurch)
 *
 *  @example
 *     new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'scientific', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['scientific-pre'] = function (a) {
    return parseFloat(a);
};


return DataTable;
}));
