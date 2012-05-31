/**
 * It is not uncommon for non-English speaking countries to use a comma for a
 * decimal place. This sorting plug-in shows how that can be taken account of in
 * sorting by adding the type 'numeric-comma' to DataTables. A type detection 
 * plug-in for this sorting method is provided below.
 *  @name Commas for decimal place
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"numeric-comma-asc": function ( a, b ) {
		var x = (a == "-") ? 0 : a.replace( /,/, "." );
		var y = (b == "-") ? 0 : b.replace( /,/, "." );
		x = parseFloat( x );
		y = parseFloat( y );

		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"numeric-comma-desc": function ( a, b ) {
		var x = (a == "-") ? 0 : a.replace( /,/, "." );
		var y = (b == "-") ? 0 : b.replace( /,/, "." );
		x = parseFloat( x );
		y = parseFloat( y );

		return ((x < y) ?  1 : ((x > y) ? -1 : 0));
	}
} );
