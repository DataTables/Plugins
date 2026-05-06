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
 * @summary     Mark.js
 * @description Search term highlighting using the Mark.js library
 * @author      Julian Kühnel, SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * It can sometimes be useful to get a visual indication of where search terms
 * are in a result set, which is exactly that this library does! It uses
 * [Mark.js](https://markjs.io/) to highlight search terms, updating on each
 * draw as required.
 *
 * To enable, make sure you load Mark.js on your page (as well as this plug-in)
 * and then add `mark: true` to your DataTables initialisation.
 *
 * @example
 *   new DataTable('#myTable', {
 *     mark: true
 *   });
 */
class MarkDataTables {
    constructor(dt, options) {
        this._columnMarks = [];
        if (!window.Mark) {
            throw new Error('Mark.js is necessary for datatables.mark.js and must be ' +
                'accessible at window.Mark');
        }
        this._dt = dt;
        this.options = typeof options === 'object' ? options : {};
        this.intervalThreshold = 49;
        this.intervalMs = 300;
        this._mark = new window.Mark(dt.table().body());
        this._listeners();
    }
    _listeners() {
        let intvl = null;
        let ev = 'draw.dt.dth ' +
            'column-visibility.dt.dth ' +
            'column-reorder.dt.dth ' +
            'responsive-display.dt.dth';
        this._dt.on(ev, () => {
            const rows = this._dt
                .rows({
                filter: 'applied',
                page: 'current'
            })
                .nodes().length;
            if (rows > this.intervalThreshold) {
                clearTimeout(intvl);
                intvl = setTimeout(() => {
                    this._performMark();
                }, this.intervalMs);
            }
            else {
                this._performMark();
            }
        });
        this._dt.on('destroy', () => {
            this._dt.off(ev);
        });
        this._performMark();
    }
    _performMark() {
        const globalSearch = this._dt.search();
        // Remove any previous highlights
        this._mark.unmark({
            done: () => {
                // Don't want to highlight the "No data" message!
                if (!this._dt.rows({ search: 'applied' }).count()) {
                    return;
                }
                // Global search highlighting
                if (globalSearch) {
                    this._mark.mark(globalSearch, this.options);
                }
                // Column search highlighting
                this._dt
                    .columns({
                    search: 'applied',
                    page: 'current'
                })
                    .nodes()
                    .each((nodes, colIndex) => {
                    // Remove any previous highlights from the column
                    if (this._columnMarks[colIndex]) {
                        this._columnMarks[colIndex].unmark();
                    }
                    const columnSearch = this._dt.column(colIndex).search();
                    if (columnSearch) {
                        this._columnMarks[colIndex] = new window.Mark(nodes);
                        this._columnMarks[colIndex].mark(columnSearch, this.options);
                    }
                });
            }
        });
    }
}
Dom.s(document).on('init.dt.dth', (event, settings) => {
    if (event.namespace !== 'dt') {
        return;
    }
    const dtInstance = new DataTable.Api(settings);
    let options = false;
    if (dtInstance.init().mark) {
        options = dtInstance.init().mark;
    }
    else if (DataTable.defaults.mark) {
        options = DataTable.defaults.mark;
    }
    if (!options) {
        return;
    }
    new MarkDataTables(dtInstance, options);
});


return DataTable;
}));
