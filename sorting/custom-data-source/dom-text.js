/**
 * Read information from a column of input (type text) elements and return an
 * array to use as a basis for sorting.
 *
 * @summary Sorting based on the values of `dt-tag input` elements in a column.
 * @name Input element data source
 * @author SpryMedia Ltd
 * @requires DataTables 3+
 */

DataTable.ext.order['dom-text'] = function (settings, col) {
	return this.api()
		.column(col, { order: 'index' })
		.nodes()
		.map(function (td, i) {
			return DataTable.Dom.s(td).find('input').val();
		});
};
