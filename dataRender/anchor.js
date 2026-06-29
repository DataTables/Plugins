/*! © Fedonyuk Anton - datatables.net/license - 3.0.0-beta.2 */

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
 *  @name Anchor
 *  @summary Renders the column data as HTML anchor (`a` tag)
 *  @author [Fedonyuk Anton](http://ensostudio.ru)
 *  @requires DataTables 3+
 *  @license MIT
 *
 *  @param {string} type The anchor type: 'link'(by default), 'phone' or 'email'
 *  @param {object|function} attributes The attributes of the anchor tag or the
 *       callback function returning the tag attributes, the callback syntax:
 *      `function (mixed data, object|array row, object meta): object`
 *  @param {string|null} innerText The inner text of the anchor tag or `null` to
 *      set text by column `data` (by default)
 *  @returns {string}
 *
 *  @example
 *    // Display `<a href="..." target="_blank">...</a>`
 *    new DataTable('#myTable', {
 *      columnDefs: [{
 *        targets: 1,
 *        render: DataTable.render.anchor()
 *      }]
 *    });
 *
 *  @example
 *    // Display `<a href="mailto:..." class="link">...</a>`
 *    new DataTable('#myTable', {
 *      columnDefs: [{
 *        targets: 2,
 *        render: DataTable.render.anchor('email', {'class': 'link'})
 *      }]
 *    });
 */
DataTable.render.anchor = function (displayType = 'link', attributes = {}, innerText = null) {
    return function (data, type, row, meta = {}) {
        // restriction only for table display rendering
        if (type !== 'display') {
            return data;
        }
        if (innerText === null) {
            innerText = data;
        }
        var attrs = typeof attributes === 'function'
            ? attributes(data, row, meta)
            : attributes;
        if (!attrs.href) {
            switch (displayType) {
                case 'mail':
                    attrs.href = 'mailto:' + data;
                    break;
                case 'phone':
                    attrs.href = 'tel:' + data.replace(/[^+\d]+/g, '');
                    break;
                case 'link':
                default:
                    try {
                        attrs.href = new URL(data);
                    }
                    catch (e) {
                        attrs.href = data;
                    }
            }
        }
        var anchorEl = Dom.c('a');
        util.object.each(attrs, (name, val) => {
            anchorEl.attr(name, val);
        });
        return anchorEl.text(innerText || '')[0].outerText;
    };
};


return DataTable;
}));
