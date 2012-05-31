/**
 * An alternative to the formatted number sorting function above (particularly
 * useful when considering localisation which uses dots/periods for 10^3
 * separation rather than decimal places). Another method of overcoming it
 * difficulties of sorting formatted numbers is to have the data to be sorted
 * upon separate from the visual data. This sorting function pair will use the
 * 'title' attribute of en empty span element (or anything else) to sort
 * numerically (for example <span title="1000000"><span>1'000'000).
 *  @name Hidden title numeric sorting
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"title-numeric-asc": function ( a, b ) {
		var x = a.match(/title="*(-?[0-9\.]+)/)[1];
		var y = b.match(/title="*(-?[0-9\.]+)/)[1];
		x = parseFloat( x );
		y = parseFloat( y );

		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"title-numeric-desc": function ( a, b ) {
		var x = a.match(/title="*(-?[0-9\.]+)/)[1];
		var y = b.match(/title="*(-?[0-9\.]+)/)[1];
		x = parseFloat( x );
		y = parseFloat( y );

		return ((x < y) ?  1 : ((x > y) ? -1 : 0));
	}
} );
