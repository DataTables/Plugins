/**
 * Just like the "hidden title numeric sorting" plug-in, this sorting plug-in
 * will take the information to be sorted on from the title attribute of a span
 * element. The only difference is that it is string based sorting rather than
 * numeric.
 *  @name Hidden title string sorting
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"title-string-asc": function ( a, b ) {
		var x = a.match(/title="(.*?)"/)[1].toLowerCase();
		var y = b.match(/title="(.*?)"/)[1].toLowerCase();

		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"title-string-desc": function ( a, b ) {
		var x = a.match(/title="(.*?)"/)[1].toLowerCase();
		var y = b.match(/title="(.*?)"/)[1].toLowerCase();

		return ((x < y) ?  1 : ((x > y) ? -1 : 0));
	}
} );
