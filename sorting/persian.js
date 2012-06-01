/**
 * Sorting in Javascript can be difficult to get right with non-Roman 
 * characters - for which special consideration must be made. This plug-in 
 * performs correct sorting on Persian characters.
 *  @name Persian
 *  @anchor Persian
 *  @author <a href="http://www.afshinblog.com/">Afshin Mehrabani</a>
 */

(function(){

var persianSort = [ 'آ', 'ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 
					'س', 'ش', 'ص', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی', 'ي' ];

function GetUniCode(source) {
	source = $.trim(source);
	result = '';
	for (i = 0; i < source.length; i++) {
		//Check and fix IE indexOf bug
		if (!Array.indexOf) {
			var index = jQuery.inArray(source.charAt(i), persianSort);
		}else{
			var index = persianSort.indexOf(source.charAt(i));
		}
		if (index < 0) {
			index = source.charCodeAt(i);
		}
		if (index < 10)
			index = '0' + index;
		result += '00' + index;
	}
	return 'a' + result;
};

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"pstring-pre": function ( a ) {
		return GetUniCode(a.toLowerCase());
	},

	"pstring-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"pstring-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );

}());