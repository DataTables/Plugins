/**
 * It can sometimes be useful to get the average of data in an API result set,
 * be it from a column, or a collection of cells. This method provides exactly
 * that ability.
 *
 *  @name average()
 *  @summary Average the values in a data set.
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @requires DataTables 1.10+
 *
 * @returns {Number} Calculated average
 *
 *  @example
 *    // Average a column
 *    var table = $('#example').DataTable();
 *    table.column( 3 ).data().average();
 *
 *  @example
 *    // Average two cells
 *    var table = $('#example').DataTable();
 *    table.cells( 0, [3,4] ).data().average();
 */

jQuery.fn.dataTable.Api.register( 'average()', function () {
	var i=0;
	var sum = this.flatten().reduce( function ( a, b ) {
		i++;
		return (a*1) + (b*1); // cast values in-case they are strings
	} );

	return sum / i;
} );

