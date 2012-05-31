/**
 * Sort numeric data which has a percent sign with it.
 *  @name Percentage
 *  @author <a href="http://jonathanromley.org/">Jonathan Romley</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"percent-asc": function ( a, b ) {
		var x = (a == "-") ? 0 : a.replace( /%/, "" );
		var y = (b == "-") ? 0 : b.replace( /%/, "" );
		x = parseFloat( x );
		y = parseFloat( y );

		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"percent-desc": function ( a, b ) {
		var x = (a == "-") ? 0 : a.replace( /%/, "" );
		var y = (b == "-") ? 0 : b.replace( /%/, "" );
		x = parseFloat( x );
		y = parseFloat( y );

		return ((x < y) ?  1 : ((x > y) ? -1 : 0));
	}
} );
