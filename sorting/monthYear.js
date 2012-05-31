/**
 * Often a list of data which has titles in it (books, albums etc) will have
 * the word "the" at the start of some individual titles, which you don't want
 * to include in your sorting order. This plug-in will strip the word "the"
 * from the start of a string and sort on what is left.
 *  @name Month / year sorting
 *  @author Michael Motek
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"monthYear-asc": function ( a, b ) {
		a = new Date('01 '+a);
		b = new Date('01 '+b);
		return ((a < b) ? -1 : ((a > b) ?  1 : 0));
	},

	"monthYear-desc": function ( a, b ) {
		a = new Date('01 '+a);
		b = new Date('01 '+b);
		return ((a < b) ? 1 : ((a > b) ?  -1 : 0));
	}
} );
