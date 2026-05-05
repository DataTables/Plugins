/*! © SpryMedia Ltd, Patrik Lindström - datatables.net/license - 3.0.0-beta.2 */

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
 * Sorting in Javascript for Chinese Character. The Chinese Characters are
 * sorted on the radical and number of strokes. This plug-in performs sorting
 * for Chinese characters using the Javascript
 * [localeCompare](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/localeCompare)
 * function.
 *
 * Please note that `localeCompare` is not implemented in the same way in all
 * browsers, potentially leading to different results (particularly in IE).
 *
 *  @name Chinese (string)
 *  @summary Sort Chinese characters
 *  @author [Patrik Lindström](http://www.lcube.se/sorting-chinese-characters-in-javascript/)
 *
 *  @example
 *    new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'chinese-string', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['chinese-string-asc'] = function (s1, s2) {
    return s1.localeCompare(s2);
};
DataTable.ext.type.order['chinese-string-desc'] = function (s1, s2) {
    return s2.localeCompare(s1);
};


return DataTable;
}));
