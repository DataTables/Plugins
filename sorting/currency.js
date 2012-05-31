/**
 * This plug-in will provide numeric sorting for currency columns (either 
 * detected automatically with the currency type detection plug-in or set 
 * manually) while taking account of the currency symbol ($ or £ by default).
 *  @name Currency
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"currency-asc": function ( a, b ) {
		/* Remove any formatting */
		var x = a == "-" ? 0 : a.replace( /[^\d\-\.]/g, "" );
		var y = b == "-" ? 0 : b.replace( /[^\d\-\.]/g, "" );
		 
		/* Parse and return */
		x = parseFloat( x );
		y = parseFloat( y );

		return x - y;
	},

	"currency-desc": function ( a, b ) {
		var x = a == "-" ? 0 : a.replace( /[^\d\-\.]/g, "" );
		var y = b == "-" ? 0 : b.replace( /[^\d\-\.]/g, "" );
		 
		x = parseFloat( x );
		y = parseFloat( y );
		
		return y - x;
	}
} );
