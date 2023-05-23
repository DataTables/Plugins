/*! © SpryMedia Ltd, Jumpy - datatables.net/license */

/**
 * Sort on the 'alt' tag of images in a column. This is particularly useful if
 * you have a column of images (ticks and crosses for example) and you want to
 * control the sorting using the alt tag.
 *
 *  @name Alt string
 *  @summary Use the `alt` attribute of an image tag as the data to sort upon.
 *  @author _Jumpy_
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'alt-string', targets: 0 }
 *       ]
 *    } );
 */

import DataTable from 'datatables.net';

DataTable.ext.type.order['alt-string-pre'] = function (a) {
	return a.match(/alt="(.*?)"/)[1].toLowerCase();
};
