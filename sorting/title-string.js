/**
 * Just like the "hidden title numeric sorting" plug-in, this sorting plug-in
 * will take the information to be sorted on from the title attribute of a span
 * element. The only difference is that it is string based sorting rather than
 * numeric.
 *  @name Hidden title string sorting
 *  @anchor hidden_title_string
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"title-string-pre": function ( a ) {
		return a.match(/title="(.*?)"/)[1].toLowerCase();
	},

	"title-string-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"title-string-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
