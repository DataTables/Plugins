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
 * Often a list of data which has titles in it (books, albums etc) will have
 * the word "the" at the start of some individual titles, which you don't want
 * to include in your sorting order. This plug-in will strip the word "the"
 * from the start of a string and sort on what is left.
 *
 *  @name Anti-"the"
 *  @summary Sort with the prefixed word `dt-string The` removed, if present
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    new DataTable('#myTable', {
 *       columnDefs: [
 *         { type: 'anti-the', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['anti-the-pre'] = function (a) {
    return a.replace(/^the /i, '');
};


return DataTable;
}));
