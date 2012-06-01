/**
 * This plug-in will treat numbers which are in scientific notation (for
 * example 1E-10, 1.2E6 etc) and sort them numerically.
 *  @name Scientific notation sorting
 *  @anchor scientific
 *  @author <a href="http://datatables.net/forums/profile/21757/nickschurch">Nick Schurch</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"scientific-pre": function ( a ) {
		return parseFloat(a);
	},

	"scientific-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"scientific-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
