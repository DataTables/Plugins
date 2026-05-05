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
 * This plug-in provides locale aware sorting for Czech.
 *
 *  @name Czech
 *  @summary Sort locale aware sorting for Czech.
 *  @author
 *
 *  @example
 *    new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'czech', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['czech-pre'] = function (a) {
    var special_letters = {
        A: 'Aa',
        a: 'aa',
        Á: 'Ab',
        á: 'ab',
        C: 'Ca',
        c: 'ca',
        Č: 'Cb',
        č: 'cb',
        D: 'Da',
        d: 'da',
        Ď: 'db',
        ď: 'db',
        E: 'Ea',
        e: 'ea',
        É: 'eb',
        é: 'eb',
        Ě: 'Ec',
        ě: 'ec',
        I: 'Ia',
        i: 'ia',
        Í: 'Ib',
        í: 'ib',
        N: 'Na',
        n: 'na',
        Ň: 'Nb',
        ň: 'nb',
        O: 'Oa',
        o: 'oa',
        Ó: 'Ob',
        ó: 'ob',
        R: 'Ra',
        r: 'ra',
        Ř: 'Rb',
        ř: 'rb',
        S: 'Sa',
        s: 'sa',
        Š: 'Sb',
        š: 'sb',
        T: 'Ta',
        t: 'ta',
        Ť: 'Tb',
        ť: 'tb',
        U: 'Ua',
        u: 'ua',
        Ú: 'Ub',
        ú: 'ub',
        Ů: 'Uc',
        ů: 'uc',
        Y: 'Ya',
        y: 'ya',
        Ý: 'Yb',
        ý: 'yb',
        Z: 'Za',
        z: 'za',
        Ž: 'Zb',
        ž: 'zb'
    };
    for (var val in special_letters) {
        a = a.split(val).join(special_letters[val]).toLowerCase();
    }
    return a;
};


return DataTable;
}));
