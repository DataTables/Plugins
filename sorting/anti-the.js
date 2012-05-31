/**
 * Often a list of data which has titles in it (books, albums etc) will have
 * the word "the" at the start of some individual titles, which you don't want
 * to include in your sorting order. This plug-in will strip the word "the"
 * from the start of a string and sort on what is left.
 *  @name Anti-"the"
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"anti-the-asc": function ( a, b ) {
		var x = a.replace(/^the /i, "");
		var y = b.replace(/^the /i, "");

		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	},

	"anti-the-desc": function ( a, b ) {
		var x = a.replace(/^the /i, "");
		var y = b.replace(/^the /i, "");
		
		return ((x < y) ? 1 : ((x > y) ? -1 : 0));
	}
} );
