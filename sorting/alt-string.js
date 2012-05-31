/**
 * Sort on the 'alt' tag of images in a column. This is particularly useful if
 * you have a column of images (ticks and crosses for example) and you want to
 * control the sorting using the alt tag.
 *  @name Alt string
 *  @author <i>Jumpy</i>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"alt-string-asc": function( a, b ) {
		var x = a.match(/alt="(.*?)"/)[1].toLowerCase();
		var y = b.match(/alt="(.*?)"/)[1].toLowerCase();

		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"alt-string-desc": function(a,b) {
		var x = a.match(/alt="(.*?)"/)[1].toLowerCase();
		var y = b.match(/alt="(.*?)"/)[1].toLowerCase();

		return ((x < y) ?  1 : ((x > y) ? -1 : 0));
	}
} );
