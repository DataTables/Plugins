/*! © SpryMedia Ltd, Behrooz Janfada - datatables.net/license */

/**
 * Sorts a column containing Farsi numbers. Farsi numbers can easily be
 * mapped 1:1 to latin numbers - ۱ = 1, ۲ = 2, ۱۲ = 12 and so on.
 *
 *
 *  @name Farsi numbers
 *  @summary Sorts columns containing UTF8 Farsi numbers
 *  @author Behrooz Janfada
 *
 *  @example
 *    $('#example').DataTable( {
 *       columnDefs: [
 *         { type: 'farsi-numbers', targets: 0 }
 *       ]
 *    } );
 */

import DataTable from 'datatables.net';

function farsiToLatin(farsi) {
	switch (farsi) {
		case '۰':
			return 0;
			break;
		case '۱':
			return 1;
			break;
		case '۲':
			return 2;
			break;
		case '۳':
			return 3;
			break;
		case '۴':
			return 4;
			break;
		case '۵':
			return 5;
			break;
		case '۶':
			return 6;
			break;
		case '۷':
			return 7;
			break;
		case '۸':
			return 8;
			break;
		case '۹':
			return 9;
			break;
		default:
			return 0;
			break;
	}
}

DataTable.ext.type.order['farsi-numbers-pre'] = function (a) {
	var latin = '',
		i = 0;

	for (i; i < a.length; i++) {
		latin += farsiToLatin(a.charAt(i));
	}

	return parseInt(latin);
};
