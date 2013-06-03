/**
 * This plug-in will provide numeric sorting for numeric columns which have extra
 * formatting, such as thousands seperators, currency symobols or any other 
 * non-numeric data.
 *  @name Formatted numbers
 *  @anchor formatted_numbers
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"formatted-num-pre": function ( a ) {
		a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		return parseFloat( a );
	},

	"formatted-num-asc": function ( a, b ) {
		return a - b;
	},

	"formatted-num-desc": function ( a, b ) {
		return b - a;
	}
} );
