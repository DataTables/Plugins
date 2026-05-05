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
 * This plug-in will strip out non-numeric formatting characters such that a
 * formatted number (for example 1,000,000) can be detected automatically and
 * sorted numerically. Note that characters a-z are not automatically removed,
 * otherwise there is a risk of detecting columns as numeric which should not
 * be.
 *
 * DataTables 1.10+ has formatted number type detection and sorting abilities
 * built-in. As such this plug-in is marked as deprecated, but might be useful
 * when working with old versions of DataTables.
 *
 *  @name Formatted numbers
 *  @summary formatted_numbers
 *  @deprecated
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 */
DataTable.ext.type.detect.unshift(function (data) {
    var deformatted = data.replace(/[^\d\-\.\/a-zA-Z]/g, '');
    var isNumeric = !isNaN(deformatted - parseFloat(deformatted));
    return isNumeric || deformatted === '-' ? 'formatted-num' : null;
});


return DataTable;
}));
