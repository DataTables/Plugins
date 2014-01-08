/**
 * Average the values in a data set.
 *
 *  @name average()
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @requires DataTables 1.10+
 *
 *  @example
 *    table.column( 3 ).data().average();
 */

jQuery.fn.dataTable.Api.register( 'average()', function () {
	var i=0;
	var sum = this.flatten().reduce( function ( a, b ) {
		i++;
		return (a*1) + (b*1); // cast values in-case they are strings
	} );

	return sum / i;
} );

