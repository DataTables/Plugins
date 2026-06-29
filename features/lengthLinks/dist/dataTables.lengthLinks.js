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
 * This feature plug-in for DataTables adds page length control links to the
 * DataTable. The `-init layout` option can be used to insert the control
 * using the `lengthLinks` option.
 *
 * @name        LengthLinks
 * @summary     Page length control via links for DataTables
 * @author      SpryMedia Ltd
 * @requires    DataTables 3+
 * @license     MIT
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'lengthLinks'
 *     }
 *   } );
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'lengthLinks'
 *     },
 *     lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
 *   } );
 */
class LengthLinks {
    constructor(inst) {
        var api = new DataTable.Api(inst);
        var settings = api.settings()[0];
        var container = Dom.c('div').classAdd('dt-lengthLinks');
        var lastLength = null;
        this.container = container;
        // Listen for events to change the page length
        container.on('click.dtll', 'a', function (e) {
            e.preventDefault();
            api.page.len(parseInt(Dom.s(this).data('length'))).draw(false);
        });
        // Update on each draw
        api.on('draw', function () {
            // No point in updating - nothing has changed
            if (api.page.len() === lastLength) {
                return;
            }
            var menu = settings.lengthMenu;
            var lang = menu.length === 2 && Array.isArray(menu[0]) ? menu[1] : menu;
            var lens = menu.length === 2 && Array.isArray(menu[0]) ? menu[0] : menu;
            var out = lens.map((el, i) => {
                return el == api.page.len()
                    ? '<a class="active" data-length="' +
                        lens[i] +
                        '">' +
                        lang[i] +
                        '</a>'
                    : '<a data-length="' + lens[i] + '">' + lang[i] + '</a>';
            });
            container.html(settings.language.lengthMenu
                .replace('_MENU_', out.join(' | '))
                .replace('_ENTRIES_', api.i18n('entries', '', 10)));
            lastLength = api.page.len();
        });
        api.on('destroy', function () {
            container.off('click.dtll', 'a');
        });
    }
    node() {
        return this.container[0];
    }
}
DataTable.LengthLinks = LengthLinks;
// Legacy `dom` option
DataTable.ext.feature.push({
    fnInit: function (settings) {
        var l = new DataTable.LengthLinks(settings);
        return l.node();
    },
    cFeature: 'L',
    sFeature: 'LengthLinks'
});
// Feature registration
DataTable.feature.register('lengthLinks', function (settings) {
    var l = new DataTable.LengthLinks(settings);
    return l.node();
});


return DataTable;
}));
