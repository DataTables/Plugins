/*! © SpryMedia Ltd - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * Often a list of data which has titles in it (books, albums etc) will have
 * the word "the" at the start of some individual titles, which you don't want
 * to include in your sorting order. This plug-in will strip the word "the"
 * from the start of a string and sort on what is left.
 *
 *  @name Anti-"the"
 *  @summary Sort with the prefixed word `dt-string The` removed, if present
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $('#example').DataTable( {
 *       columnDefs: [
 *         { type: 'anti-the', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['anti-the-pre'] = function (a) {
    return a.replace(/^the /i, '');
};


export default DataTable;
