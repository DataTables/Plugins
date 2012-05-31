/**
 * Although DataTables' internal numeric sorting works no problem on negative
 * numbers, it does not accept positively signed numbers. This plug-in will
 * sort just such data numerically.
 *  @name Fully signed numbers sorting 
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"signed-num-asc": function ( a, b ) {
		var x = (a=="-" || a==="") ? 0 : a.replace('+','')*1;
		var y = (b=="-" || b==="") ? 0 : b.replace('+','')*1;
		return x - y;
	},

	"signed-num-desc": function ( a, b ) {
		var x = (a=="-" || a==="") ? 0 : a.replace('+','')*1;
		var y = (b=="-" || b==="") ? 0 : b.replace('+','')*1;
		return y - x;
	}
} );
