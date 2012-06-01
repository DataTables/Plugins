/**
 * This plug-in will provide numeric sorting for currency columns (either 
 * detected automatically with the currency type detection plug-in or set 
 * manually) while taking account of the currency symbol ($ or £ by default).
 *  @name Currency
 *  @anchor currency
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"currency-pre": function ( a ) {
		a = (a==="-") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		return parseFloat( a );
	},

	"currency-asc": function ( a, b ) {
		return a - b;
	},

	"currency-desc": function ( a, b ) {
		return b - a;
	}
} );
