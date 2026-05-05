/*! © SpryMedia Ltd, Yuksel Beyti - datatables.net/license - 3.0.0-beta.2 */

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
 * Sorting in Javascript for Turkish Characters. This plug-in will replace the
 * special turkish letters (non english characters) and replace in English.
 *
 *  @name Turkish
 *  @summary Sort Turkish characters
 *  @author [Yuksel Beyti](http://yukselbeyti.com)
 *
 *  @example
 *    // Use plug-in for all columns
 *     new DataTable('#example', {
 *       columnDefs: [
 *           { type: 'turkish', targets: '_all' }
 *       ]
 *   });
 */
DataTable.ext.type.order['turkish-pre'] = function (a) {
    var special_letters = {
        C: 'Ca',
        c: 'ca',
        Ç: 'Cb',
        ç: 'cb',
        G: 'Ga',
        g: 'ga',
        Ğ: 'Gb',
        ğ: 'gb',
        I: 'Ia',
        ı: 'ia',
        İ: 'Ib',
        i: 'ib',
        O: 'Oa',
        o: 'oa',
        Ö: 'Ob',
        ö: 'ob',
        S: 'Sa',
        s: 'sa',
        Ş: 'Sb',
        ş: 'sb',
        U: 'Ua',
        u: 'ua',
        Ü: 'Ub',
        ü: 'ub',
    };
    for (var val in special_letters) {
        a = a.split(val).join(special_letters[val]).toLowerCase();
    }
    return a;
};


return DataTable;
}));
