/*! © SpryMedia Ltd - datatables.net/license */

/**
 * @summary     RowFill
 * @description Match the number of rows in a table to the page length
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * This feature plug-in for DataTables will automatically insert temporary rows
 * into a DataTable that draws a page that is less than the configured page
 * length. This can be handy to ensure that your table always as (e.g.) 10 rows
 * visible.
 *
 * Filler rows have the class `dt-rowFill--filler` assigned to them allowing for
 * additional styling (e.g. reducing opacity).
 *
 * To enable for a table add `rowFill: true` to your DataTables configuration:
 *
 * ```js
 * const table = new DataTable('#myTable', {
 *   rowFill: true
 * });
 * ```
 */

import DataTable, { Api, Context, Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStatic {
		/** Match the number of rows in a table to the page length */
		RowFill: typeof RowFill;
	}

	interface Config {
		rowFill?: boolean;
	}

	interface Defaults {
		rowFill?: boolean;
	}
}

interface ISettings {
	dt: Api;
	body: Dom;
}

export default class RowFill {
	private s: ISettings;

	constructor(dt: Api) {
		let table = dt.table();

		this.s = {
			dt: dt,
			body: Dom.s(table.body())
		};

		this._attach();
	}

	private _attach() {
		let dt = this.s.dt;
		let body = this.s.body;

		dt.on('draw', function () {
			let colspan = dt.columns(':visible').count();
			let rowCount = dt.rows({ page: 'current' }).count();
			let class1 = 'even';
			let class2 = 'odd';

			// Take account of the fact that DataTables will show a "Nothing
			// found" row for an empty record set
			if (rowCount === 0) {
				rowCount = 1;
			}

			// Reverse for continuation from the DataTable rows when a odd
			// number of rows
			if (rowCount % 2 === 0) {
				class1 = 'odd';
				class2 = 'even';
			}

			for (let i = 0; i < dt.page.len() - rowCount; i++) {
				body.append(
					Dom.c('tr').append(
						Dom.c('td')
							.attr('colspan', colspan)
							.classAdd(i % 2 === 0 ? class1 : class2)
							.classAdd('dt-rowFill--filler')
							.html('&nbsp;')
					)
				);
			}
		});
	}
}

DataTable.RowFill = RowFill;

// Automatic initialisation listener
Dom.s(document).on('preInit.dt', function (e, settings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	let api = new DataTable.Api(settings);

	if (settings.init.rowFill || DataTable.defaults.rowFill) {
		new RowFill(api);
	}
});
