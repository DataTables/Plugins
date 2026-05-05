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
 *
 * This plug in will sort only on the number value that is included anywhere in
 * a Regex. This is useful for sorting data which requires some extra context to
 * be included in the table.
 *
 *  @name numString
 *  @summary Sorting for number value that is included anywhere in a regex.
 *  @author [Sandy Galloway](http://datatables.net)
 *
 *  @example
 * // This example shows a mixture of text and number values, with the number at the start of the expression.
 * // It is using regex and start and end of expression tags.
 * // It will match "5 examples completed." for example.
 * DataTable.numString(/^\d+ examples? completed.$/);
 * var table = new DataTable('#example');
 *
 * @example
 * // This example shows a mixture of text and number values, with the number at the end of the expression.
 * // It is using regex and start and end of expression tags.
 * // It will match "Examples left: 67" for example.
 * DataTable.numString(/^Examples? left: \d+$/);
 * var table = new DataTable('#example');
 *
 * @example
 * // This example shows a mixture of text and number values, with the number in the middle of the expression.
 * // It is using regex and no start and end of expression tags.
 * // It will match "Only 1 left." for example.
 * DataTable.numString(/Only \d+ left./);
 * var table = new DataTable('#example');
 *
 */
DataTable.numString = function (format) {
    // This is the type detection plug in
    DataTable.ext.type.detect.unshift(function (data) {
        if (typeof data !== 'string') {
            return null;
        }
        if (data.match(format)) {
            return 'numString-' + format.source;
        }
        return null;
    });
    // This is the ordering plug in
    DataTable.ext.type.order['numString-' + format.source + '-pre'] = function (data) {
        var num = data.replace(/\D/g, '');
        return num * 1;
    };
};


return DataTable;
}));
