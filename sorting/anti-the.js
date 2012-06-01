/**
 * Often a list of data which has titles in it (books, albums etc) will have
 * the word "the" at the start of some individual titles, which you don't want
 * to include in your sorting order. This plug-in will strip the word "the"
 * from the start of a string and sort on what is left.
 *  @name Anti-"the"
 *  @anchor anti_the
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"anti-the-pre": function ( a ) {
		return a.replace(/^the /i, "");
	},

	"anti-the-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"anti-the-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
