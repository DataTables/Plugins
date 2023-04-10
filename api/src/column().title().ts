/*! © Alejandro Navarro - datatables.net/license */

/**
 * This plug-in will read the text from the header cell of a column, returning
 * that value.
 *
 *  @name column().title()
 *  @summary Get the title of a column
 *  @author Alejandro Navarro
 *  @requires DataTables 1.10+
 *
 * @returns {String} Column title
 *
 * @example
 *    // Read the title text of column index 3
 *    var table = $('#example').DataTable();
 *    table.column( 3 ).title();
 */

import DataTable from 'datatables.net';

declare module 'datatables.net' {
	interface ApiColumnMethods {
		/** Get the title of a column */
		title(): string;
	}
}

DataTable.Api.register('column().title()', function () {
	var title = this.header();
	return $(title).text().trim();
});
