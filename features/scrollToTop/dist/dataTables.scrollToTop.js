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

var Dom = DataTable.Dom;

/**
 * @summary     scrollToTop
 * @description Always return to top of table when page changed
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * When enabled for a table, this option will cause the page to scroll to the
 * top of the table when paging is triggered by the end user. This can be useful
 * for very long tables.
 *
 * To enable for a table add `scrollToTop: true` to your DataTables
 * configuration:
 *
 * ```js
 * const table = new DataTable('#myTable', {
 *   scrollToTop: true
 * });
 * ```
 */
// Automatic initialisation listener
Dom.s(document).on('preInit.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
        return;
    }
    if (settings.init.scrollToTop || DataTable.defaults.scrollToTop) {
        let api = new DataTable.Api(settings);
        api.on('page', function () {
            setTimeout(function () {
                window.scrollTo({
                    top: Dom.s(api.table().container()).offset().top,
                    behavior: 'smooth'
                });
            }, 10);
        });
    }
});


return DataTable;
}));
