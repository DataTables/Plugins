/**
 * Sum the values in a data set.
 *  @name sum()
 *  @anchor sum()
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *  @requires DataTables 1.10+
 *
 *  @example
 *    table.column( 3 ).data().sum();
 */

jQuery.fn.dataTable.Api.register( 'sum()', function () {
	return this.flatten().reduce( function ( a, b ) {
		return (a*1) + (b*1); // cast values in-case they are strings
	} );
} );

