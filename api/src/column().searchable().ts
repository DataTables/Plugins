/*! © SpryMedia Ltd - datatables.net/license */

/**
 * The plug-in provides a way to determine the searchable state of one or more
 * columns, as was configured by the `-init columns.searchable` option.
 * 
 * @name columns().order()
 * @summary Apply multi-column ordering through the columns() API method.
 * @author [Allan Jardine](http://sprymedia.co.uk)
 * @requires DataTables 1.10+
 *
 * @returns {boolean|DataTables.Api} Searchable flag
 *
 * @example
 *  // Get the searchable flag for all columns
 *  table.columns().searchable().toArray()
 *
 * @example
 *  // Get the searchable flag for column index 0
 *  table.column(0).searchable()
 */

 import DataTable from 'datatables.net';

 declare module 'datatables.net' {
	interface ApiColumnMethods {
		/** Get searchable flag for selected column */
		searchable(): boolean;
	}

	interface ApiColumnsMethods {
		/** Get searchable flag for selected columns */
		searchable(): Api<boolean>;
	}
}

DataTable.Api.registerPlural(
	'columns().searchable()',
	'column().searchable()',
	function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].bSearchable;
		}, 1 );
	}
);
 