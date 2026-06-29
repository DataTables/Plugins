/*! © SpryMedia Ltd, Garrett Hyder - datatables.net/license */

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

import DataTable, { Context, Dom, util } from 'datatables.net';

declare module 'datatables.net' {
	interface Config {
		conditionalPageLength: boolean;
	}

	interface Defaults {
		conditionalPageLength: boolean;
	}
}

Dom.s(document).on('init.dt', function (e, dtSettings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	var options =
			dtSettings.init.conditionalPageLength ||
			DataTable.defaults.conditionalPageLength,
		lengthMenu = dtSettings.lengthMenu || DataTable.defaults.lengthMenu,
		lengthMenuValues = Array.isArray(lengthMenu[0])
			? lengthMenu[0]
			: lengthMenu;

	lengthMenuValues = lengthMenuValues.filter(function (n) {
		return n > 0;
	});

	var smallestLength = Math.min.apply(Math, lengthMenuValues);

	if (util.is.plainObject(options) || options === true) {
		var config = util.is.plainObject(options) ? options : {},
			api = new DataTable.Api(dtSettings),
			conditionalPageLength = function (e: Event | null) {
				var paging = Dom.s(api.table().container()).find(
						'div.dt-length'
					),
					pages = api.page.info().pages,
					size = api.rows({ search: 'applied' }).count();

				paging.css(
					'visibility',
					pages <= 1 && size <= smallestLength ? 'hidden' : ''
				);
			};

		conditionalPageLength(null);

		api.on('draw.dt', conditionalPageLength);
	}
});
