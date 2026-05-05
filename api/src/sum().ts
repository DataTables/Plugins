/*! © SpryMedia Ltd - datatables.net/license */

/**
 * Fairly simply, this plug-in will take the data from an API result set
 * and sum it, returning the summed value. The data can come from any data
 * source, including column data, cells or rows.
 *
 * Note that it will attempt to 'deformat' any string based data that is passed
 * into it - i.e. it will strip any non-numeric characters in order to make a
 * best effort attempt to sum all data types. This can be useful when working
 * with formatting numbers such as currency. However the trade-off is that no
 * error is thrown if non-numeric data is passed in. You should be aware of this
 * in case unexpected values are returned - likely the input data is not what is
 * expected.
 *
 * @name sum()
 * @summary Sum the values in a data set.
 * @author [Allan Jardine](http://datatables.net)
 * @requires DataTables 3+
 *
 * @returns {Number} Summed value
 *
 * @example
 *    // Simply get the sum of a column
 *    var table = new DataTable('#example');
 *    table.column( 3 ).data().sum();
 *
 * @example
 *    // Insert the sum of a column into the columns footer, for the visible
 *    // data on each draw
 *    new DataTable('#example').DataTable( {
 *      drawCallback: function () {
 *        var api = this.api();
 *        api.column(4).footer().innerHTML =
 *          api.column( 4, {page:'current'} ).data().sum();
 *      }
 *    } );
 */

import DataTable, { Api } from 'datatables.net';

declare module 'datatables.net' {
	interface Api<T> {
		/** Sum the values in a data set. */
		sum(): Number;
	}
}

DataTable.Api.register('sum()', function (this: Api) {
	return this.flatten().reduce(function (a, b) {
		if (typeof a === 'string') {
			a = (a.replace(/[^\d.-]/g, '') as any) * 1;
		}
		if (typeof b === 'string') {
			b = (b.replace(/[^\d.-]/g, '') as any) * 1;
		}

		return a + b;
	}, 0);
});
