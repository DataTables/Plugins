/*! © SpryMedia Ltd, Khorshid - datatables.net/license */

/**
 * Sorts a column containing Persian numbers. Persian numbers can easily be
 * mapped 1:1 to latin numbers - ۱ = 1, ۲ = 2, ۱۲ = 12 and so on.
 *
 *  @name Persian Number Sorting
 *  @summary Sorts columns containing UTF-8 Persian numbers
 *  @author [Khorshid](https://khorshidlab.com)
 *
 *  @example
 *    $('#example').DataTable( {
 *       columnDefs: [
 *         { type: 'kh-persian-numbers', targets: 0 }
 *       ]
 *    } );
 */

import DataTable from 'datatables.net';

function toEnglishNumber(strNum) {
	var pn = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
	var en = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var cache = strNum;

	for (var i = 0; i < 10; i++) {
		var regex_fa = new RegExp(pn[i], 'g');
		cache = cache.replace(regex_fa, en[i]);
	}

	return cache;
}

DataTable.ext.type.order['kh-persian-numbers-pre'] = function (a, b) {
	return parseFloat(toEnglishNumber(a));
};
