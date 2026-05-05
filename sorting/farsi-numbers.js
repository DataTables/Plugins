/*! © SpryMedia Ltd, Behrooz Janfada - datatables.net/license - 3.0.0-beta.2 */

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
 * Sorts a column containing Farsi numbers. Farsi numbers can easily be
 * mapped 1:1 to latin numbers - ۱ = 1, ۲ = 2, ۱۲ = 12 and so on.
 *
 *
 *  @name Farsi numbers
 *  @summary Sorts columns containing UTF8 Farsi numbers
 *  @author Behrooz Janfada
 *
 *  @example
 *    new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'farsi-numbers', targets: 0 }
 *       ]
 *    } );
 */
function farsiToLatin(farsi) {
    switch (farsi) {
        case '۰':
            return 0;
            break;
        case '۱':
            return 1;
            break;
        case '۲':
            return 2;
            break;
        case '۳':
            return 3;
            break;
        case '۴':
            return 4;
            break;
        case '۵':
            return 5;
            break;
        case '۶':
            return 6;
            break;
        case '۷':
            return 7;
            break;
        case '۸':
            return 8;
            break;
        case '۹':
            return 9;
            break;
        default:
            return 0;
            break;
    }
}
DataTable.ext.type.order['farsi-numbers-pre'] = function (a) {
    var latin = '', i = 0;
    for (i; i < a.length; i++) {
        latin += farsiToLatin(a.charAt(i));
    }
    return parseInt(latin);
};


return DataTable;
}));
