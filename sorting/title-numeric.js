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
 * An alternative to the formatted number sorting function above (particularly
 * useful when considering localisation which uses dots / periods for 10^3
 * separation rather than decimal places). Another method of overcoming it
 * difficulties of sorting formatted numbers is to have the data to be sorted
 * upon separate from the visual data. This sorting function pair will use the
 * 'title' attribute of en empty span element (or anything else) to sort
 * numerically (for example `<span title="1000000"><span>1'000'000`).
 *
 * Note that the HTML5 `data-sort` attribute can be [used to supply sorting data
 * to DataTables](//datatables.net/manual/orthogonal-data) and is preferable to
 * using this method, which is therefore marked as deprecated.
 *
 *  @name Hidden title numeric sorting
 *  @summary Sort data numerically based on an attribute on an empty element.
 *  @deprecated
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *     new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'title-numeric', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['title-numeric-pre'] = function (a) {
    var x = a.match(/title="*(-?[0-9\.]+)/)[1];
    return parseFloat(x);
};


return DataTable;
}));
