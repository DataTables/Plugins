/*! © SpryMedia Ltd, Garrett Hyder - datatables.net/license - 3.0.0-beta.2 */

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
 * This feature plugin for DataTables hides the page length control when the
 * amount of pages is <= 1.
 *
 * @name        ConditionalPageLength
 * @summary     Hide the page length control when the amount of pages is <= 1
 * @author      Garrett Hyder (https://github.com/garretthyder)
 * @copyright   Copyright Garrett Hyder and SpryMedia
 * @license     MIT - http://datatables.net/license/mit
 *
 * @example
 *    new DataTable('#myTable', {
 *        conditionalPageLength: true
 *    });
 */
Dom.s(document).on('init.dt', function (e, dtSettings) {
    if (e.namespace !== 'dt') {
        return;
    }
    var options = dtSettings.init.conditionalPageLength ||
        DataTable.defaults.conditionalPageLength, lengthMenu = dtSettings.lengthMenu || DataTable.defaults.lengthMenu, lengthMenuValues = Array.isArray(lengthMenu[0])
        ? lengthMenu[0]
        : lengthMenu;
    lengthMenuValues = lengthMenuValues.filter(function (n) {
        return n > 0;
    });
    var smallestLength = Math.min.apply(Math, lengthMenuValues);
    if (util.is.plainObject(options) || options === true) {
        var config = util.is.plainObject(options) ? options : {}, api = new DataTable.Api(dtSettings), conditionalPageLength = function (e) {
            var paging = Dom.s(api.table().container()).find('div.dt-length'), pages = api.page.info().pages, size = api.rows({ search: 'applied' }).count();
            paging.css('visibility', pages <= 1 && size <= smallestLength ? 'hidden' : '');
        };
        conditionalPageLength(null);
        api.on('draw.dt', conditionalPageLength);
    }
});


return DataTable;
}));
