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
 * This feature will fade out rows which don't match from the input
 *
 * @summary     SearchFade
 * @description Search and Fade unmatching rows in a DataTables
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'searchFade'
 *     }
 *   });
 */
DataTable.Api.register('searchFade()', function () {
    return this;
});
DataTable.Api.register('searchFade().node()', function () {
    return this.settings()[0].searchFadeNode;
});
class SearchFade {
    constructor(settings) {
        var that = this;
        var table = new DataTable.Api(settings);
        var searchFade = Dom.c('div').classAdd('searchFade').append('Search: ');
        table.settings()[0].searchFadeNode = searchFade;
        this.searchFade = searchFade;
        this.input = Dom.c('input')
            .attr('type', 'text')
            .classAdd(['dt-input', 'searchFadeInput'])
            .appendTo(searchFade);
        // Trigger a search
        searchFade.on('keyup redraw', 'input', function () {
            table
                .rows({ page: 'current' })
                .every(function (rowIdx, tableLoop, rowLoop) {
                var present = true;
                var val = that.input.val();
                if (val.length) {
                    present = table
                        .row(rowIdx)
                        .data()
                        .some(function (v) {
                        return v.match(new RegExp(val, 'i')) != null;
                    });
                }
                Dom.s(table.row(rowIdx).node()).classToggle('notMatched', !present);
            });
        });
        table.on('draw', function () {
            searchFade.find('input').trigger('redraw');
        });
    }
    // API method to get the searchFade container node
    node() {
        return this.searchFade;
    }
}
DataTable.SearchFade = SearchFade;
// Legacy `dom` interface
DataTable.ext.feature.push({
    fnInit: function (settings) {
        var search = new DataTable.SearchFade(settings);
        return search.node();
    },
    cFeature: 'F'
});
// Layout initialisation - use this!
DataTable.feature.register('searchFade', function (settings) {
    var search = new DataTable.SearchFade(settings);
    return search.node();
});
Dom.s(document).on('init.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
        return;
    }
    if (settings.init.searchFade || DataTable.defaults.searchFade) {
        new DataTable.SearchFade(settings);
    }
    return;
});


return DataTable;
}));
