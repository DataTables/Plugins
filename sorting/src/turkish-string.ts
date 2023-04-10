/*! © SpryMedia Ltd, Yuksel Beyti - datatables.net/license */

/**
 * Sorting in Javascript for Turkish Characters. This plug-in will replace the special
 * turkish letters (non english characters) and replace in English.
 *
 *  @name Turkish
 *  @summary Sort Turkish characters
 *  @author [Yuksel Beyti](http://yukselbeyti.com)
 *
 *  @example
 *    // Use plug-in for all columns
 *    $('#example').dataTable({
 *       columnDefs: [
 *           { type: 'turkish', targets: '_all' }
 *       ]
 *   });
 */

import DataTable from 'datatables.net';

DataTable.ext.order['turkish-pre'] = function (a) {
	var special_letters = {
		C: 'Ca',
		c: 'ca',
		Ç: 'Cb',
		ç: 'cb',
		G: 'Ga',
		g: 'ga',
		Ğ: 'Gb',
		ğ: 'gb',
		I: 'Ia',
		ı: 'ia',
		İ: 'Ib',
		i: 'ib',
		O: 'Oa',
		o: 'oa',
		Ö: 'Ob',
		ö: 'ob',
		S: 'Sa',
		s: 'sa',
		Ş: 'Sb',
		ş: 'sb',
		U: 'Ua',
		u: 'ua',
		Ü: 'Ub',
		ü: 'ub',
	};
	for (var val in special_letters) {
		a = a.split(val).join(special_letters[val]).toLowerCase();
	}

	return a;
};
