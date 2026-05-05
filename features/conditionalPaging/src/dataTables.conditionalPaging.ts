/*! © SpryMedia Ltd, Matthew Hasbach - datatables.net/license */

/**
 * @summary     ConditionalPaging
 * @description Hide paging controls when the amount of pages is <= 1
 * @author      Matthew Hasbach (https://github.com/mjhasbach)
 * @copyright   Copyright Matthew Hasbach and SpryMedia
 * @license     MIT - http://datatables.net/license/mit
 *
 * This feature plugin for DataTables hides paging controls when the amount
 * of pages is <= 1.
 *
 * @example
 *    new DataTable('#myTable', {
 *        conditionalPaging: true
 *    });
 */

import DataTable, { Context, Dom, util } from 'datatables.net';

declare module 'datatables.net' {
	interface Config {
		conditionalPaging: boolean;
	}

	interface Defaults {
		conditionalPaging: boolean;
	}
}

Dom.s(document).on('init.dt', function (e, dtSettings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	var options =
		dtSettings.init.conditionalPaging ||
		DataTable.defaults.conditionalPaging;

	if (util.is.plainObject(options) || options === true) {
		var config = util.is.plainObject(options) ? options : {},
			api = new DataTable.Api(dtSettings),
			conditionalPaging = function (e: Event | null) {
				var paging = Dom.s(api.table().container()).find(
						'div.dt-paging'
					),
					pages = api.page.info().pages;

				if (e instanceof $.Event) {
					if (pages <= 1) {
						paging.css('visibility', 'hidden');
					}
					else {
						paging.css('visibility', '');
					}
				}
				else if (pages <= 1) {
					paging.css('visibility', 'hidden');
				}
			};

		conditionalPaging(null);

		api.on('draw.dt', conditionalPaging);
	}
});
