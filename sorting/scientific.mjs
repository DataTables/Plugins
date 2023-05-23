/*! © SpryMedia Ltd, Nick Schurch - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * This plug-in will treat numbers which are in scientific notation (for
 * example `1E-10`, `1.2E6` etc) and sort them numerically.
 *
 *  @name Scientific notation sorting
 *  @summary Sort data which is written in exponential notation.
 *  @author [Nick Schurch](http://datatables.net/forums/profile/21757/nickschurch)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'scientific', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['scientific-pre'] = function (a) {
    return parseFloat(a);
};


export default DataTable;
