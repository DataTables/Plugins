/*! © SpryMedia Ltd, Matthew Hasbach - datatables.net/license - 3.0.0-beta.2 */

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
var util = DataTable.util;

/**
 * This feature plugin for DataTables hides paging controls when the amount
 * of pages is <= 1.
 *
 * @summary     ConditionalPaging
 * @description Hide paging controls when the amount of pages is <= 1
 * @author      Matthew Hasbach (https://github.com/mjhasbach)
 * @copyright   Copyright Matthew Hasbach and SpryMedia
 * @license     MIT - http://datatables.net/license/mit
 *
 * @example
 *    new DataTable('#myTable', {
 *        conditionalPaging: true
 *    });
 */
Dom.s(document).on('init.dt', function (e, dtSettings) {
    if (e.namespace !== 'dt') {
        return;
    }
    var options = dtSettings.init.conditionalPaging ||
        DataTable.defaults.conditionalPaging;
    if (util.is.plainObject(options) || options === true) {
        var config = util.is.plainObject(options) ? options : {}, api = new DataTable.Api(dtSettings), conditionalPaging = function (e) {
            var paging = Dom.s(api.table().container()).find('div.dt-paging'), pages = api.page.info().pages;
            paging.css('visibility', pages <= 1 ? 'hidden' : '');
        };
        conditionalPaging(null);
        api.on('draw.dt', conditionalPaging);
    }
});


return DataTable;
}));
