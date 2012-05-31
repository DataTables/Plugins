/**
 * DataTables internal date sorting replies on Date.parse() which is part of 
 * the Javascript language, but you may wish to sort on dates which is doesn't 
 * recognise. The following is a plug-in for sorting dates in the format 
 * dd/mm/yy.
 * 
 * An automatic type detection plug-in is available for this sorting plug-in.
 *  @name Date (dd/mm/YY) 
 *  @author Andy McMaster
 */

 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"date-uk-asc": function ( a, b ) {
		var ukDatea = a.split('/');
		var ukDateb = b.split('/');
		 
		var x = (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
		var y = (ukDateb[2] + ukDateb[1] + ukDateb[0]) * 1;
		 
		return ((x < y) ? -1 : ((x > y) ?  1 : 0));
	},

	"date-uk-desc": function ( a, b ) {
		var ukDatea = a.split('/');
		var ukDateb = b.split('/');
		 
		var x = (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
		var y = (ukDateb[2] + ukDateb[1] + ukDateb[0]) * 1;
		 
		return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
	}
} );
