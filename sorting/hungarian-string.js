/**
 * This plug-in provides locale aware sorting for Hungarian.
 *
 *  @name Hungarian
 *  @summary Sort locale aware sorting for Hungarian.
 *  @author  Karmacsi Gábor (Carmachy)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'hungarian', targets: 0 }
 *       ]
 *    } );
 */

$.extend( $.fn.dataTableExt.oSort, {
	"hungarian-pre": function ( a ) {
		var special_letters = {
			"A": "Aa", "a": "aa", "Á": "Ab", "á": "ab",
			"E": "Ea", "e": "ea", "É": "eb", "é": "eb",
			"I": "Ia", "i": "ia", "Í": "Ib", "í": "ib",
			"O": "Oa", "o": "oa", "Ó": "Ob", "ó": "ob", "Ö": "oc", "ö": "oc", "Ő": "od", "ő": "oc",
			"U": "Ua", "u": "ua", "Ú": "Ub", "ú": "ub", "Ü": "Uc", "ü": "uc", "Ű": "ud", "ű": "ud"
		};
		for (var val in special_letters)
			a = a.split(val).join(special_letters[val]).toLowerCase();
		return a;
	},

	"hungarian-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"hungarian-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
});