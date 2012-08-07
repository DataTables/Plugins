/**
 * Sorting in Javascript for Chinese Character. The Chinese Characters are sorted on the radical and number of 
 * strokes. This plug-in  performs  sorting for Chinese characters.
 * <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/localeCompare">localeCompare MDC documentation</a>. 
 * Please also see <a href="http://www.datatables.net/forums/discussion/9700/sorting-non-ascii-characters-and-data-content-html-tag-sorting/p1">note about localeCompare and IE9</a>.
 *  @name Chinese (string)
 *  @anchor chinese-string
 *  @author <a href="http://www.lcube.se/sorting-chinese-characters-in-javascript/">Patrik Lindstr�m</a>
 */
 
 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"chinese-string-asc" : function (s1, s2) {
		return s1.localeCompare(s2);
	},
	"chinese-string-desc" : function (s1, s2) {
		return s2.localeCompare(s1);
	}
} );
