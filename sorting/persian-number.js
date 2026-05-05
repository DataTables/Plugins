/*! © SpryMedia Ltd, Khorshid - datatables.net/license - 3.0.0-beta.2 */

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
 * Sorts a column containing Persian numbers. Persian numbers can easily be
 * mapped 1:1 to latin numbers - ۱ = 1, ۲ = 2, ۱۲ = 12 and so on.
 *
 *  @name Persian Number Sorting
 *  @summary Sorts columns containing UTF-8 Persian numbers
 *  @author [Khorshid](https://khorshidlab.com)
 *
 *  @example
 *     new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'kh-persian-numbers', targets: 0 }
 *       ]
 *    });
 */
function toEnglishNumber(strNum) {
    var pn = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    var en = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var cache = strNum;
    for (var i = 0; i < 10; i++) {
        var regex_fa = new RegExp(pn[i], 'g');
        cache = cache.replace(regex_fa, en[i]);
    }
    return cache;
}
DataTable.ext.type.order['kh-persian-numbers-pre'] = function (a, b) {
    return parseFloat(toEnglishNumber(a));
};


return DataTable;
}));
