/*! © SpryMedia Ltd - datatables.net/license */

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

import DataTable, { Context, Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface Defaults {
		scrollToTop?: boolean;
	}

	interface Config {
		scrollToTop?: boolean;
	}
}

// Automatic initialisation listener
Dom.s(document).on('preInit.dt', function (e, settings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	if (settings.init.scrollToTop || DataTable.defaults.scrollToTop) {
		let api = new DataTable.Api(settings);

		api.on('page', function () {
			setTimeout(function () {
				window.scrollTo({
					top: Dom.s(api.table().container()).offset()!.top,
					behavior: 'smooth'
				});
			}, 10);
		});
	}
});
