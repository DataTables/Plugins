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
 * This plug in will sort data taking into account upper and lower case. In
 * ascending order it will prioritise upper case letters, before continuing to
 * the lower case letters.
 *
 * @name Case-Sensitive
 * @summary Sort based on case of data, In ascending order capitals are
 *   prioritised over lower case.
 * @author [Sandy Galloway](http://datatables.net)
 *
 *
 *  @example
 *   // This example shows how to invoke the case-sensitive plugin on the first column.
 *   // It will sort the data in alphabetical order Prioritising the capital letters to take
 *   // a form similar to [A,B,C,D,...,a,b,c,d,...] for ascending order.
 *   var table = new DataTable('#example', {
 *      columnDefs: [
 *            {type: "case-sensitive", targets:0}
 *       ]
 *   });
 **/
DataTable.ext.type.order['case-sensitive-asc'] = function (a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    return 0;
};
DataTable.ext.type.order['case-sensitive-desc'] = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (a < b) {
        return 1;
    }
    return 0;
};


return DataTable;
}));
