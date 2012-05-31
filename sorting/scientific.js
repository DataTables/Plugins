/**
 * This plug-in will treat numbers which are in scientific notation (for
 * example 1E-10, 1.2E6 etc) and sort them numerically.
 *  @name Scientific notation sorting
 *  @author <a href="http://datatables.net/forums/profile/21757/nickschurch">Nick Schurch</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"scientific-asc": function ( a, b ) {
		var x = parseFloat(a);
		var y = parseFloat(b);

		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"scientific-desc": function ( a, b ) {
		var x = parseFloat(a);
		var y = parseFloat(b);

		return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
	}
} );
