/*! © Fedonyuk Anton - datatables.net/license */

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

import DataTable, { Dom, util } from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStaticRender {
		/** Renders the column data as HTML anchor (`a` tag) */
		anchor(
			displayType: string,
			attribute: { [key: string]: any },
			innerText: string | null
		): any;
	}
}

DataTable.render.anchor = function (
	displayType = 'link',
	attributes = {},
	innerText = null
) {
	return function (data: any, type: string, row: any, meta = {}) {
		// restriction only for table display rendering
		if (type !== 'display') {
			return data;
		}

		if (innerText === null) {
			innerText = data;
		}

		var attrs =
			typeof attributes === 'function'
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
					} catch (e) {
						attrs.href = data;
					}
			}
		}

		var anchorEl = Dom.c('a');

		util.object.each(attrs, (name, val) => {
			anchorEl.attr(name, val as any);
		})

		return anchorEl.text(innerText || '')[0].outerText;
	};
};
