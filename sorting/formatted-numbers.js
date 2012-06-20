/**
 * This plug-in will provide numeric sorting for numeric columns which have extra
 * formatting, such as thousands seperators, currency symobols or any other 
 * non-numeric data.
 *  @name Formatted numbers
 *  @anchor formatted_numbers
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"formatted_numbers-pre": function ( a ) {
		a = (a==="-") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		return parseFloat( a );
	},

	"formatted_numbers-asc": function ( a, b ) {
		return a - b;
	},

	"formatted_numbers-desc": function ( a, b ) {
		return b - a;
	}
} );
