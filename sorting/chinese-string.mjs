/*! © SpryMedia Ltd, Patrik Lindström - datatables.net/license */

import $ from 'jquery';
import DataTable from 'datatables.net';

/**
 * Sorting in Javascript for Chinese Character. The Chinese Characters are
 * sorted on the radical and number of strokes. This plug-in performs sorting
 * for Chinese characters using the Javascript [localeCompare](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/localeCompare)
 * function.
 *
 * Please note that `localeCompare` is not implemented in the same way in all
 * browsers, potentially leading to different results (particularly in IE).
 *
 *  @name Chinese (string)
 *  @summary Sort Chinese characters
 *  @author [Patrik Lindström](http://www.lcube.se/sorting-chinese-characters-in-javascript/)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'chinese-string', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.order['chinese-string-asc'] = function (s1, s2) {
    return s1.localeCompare(s2);
};
DataTable.ext.order['chinese-string-desc'] = function (s1, s2) {
    return s2.localeCompare(s1);
};


export default DataTable;
