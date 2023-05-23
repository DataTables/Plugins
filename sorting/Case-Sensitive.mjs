/*! © SpryMedia Ltd - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 *
 *This plug in will sort data taking into account upper and lower case. In ascending order it will prioritise
 *upper case letters, before continuing to the lower case letters.
 *
 *  @name Case-Sensitive
 *  @summary Sort based on case of data, In ascending order capitals are prioritised over lower case.
 *  @author [Sandy Galloway](http://datatables.net)
 *
 *
 *  @example
 * //This example shows how to invoke the case-sensitive plugin on the first column.
 * //It will sort the data in alphabetical order Prioritising the capital letters to take
 * //a form similar to [A,B,C,D,...,a,b,c,d,...] for ascending order.
 *   var table = $('#example').DataTable({
 *      columnDefs: [
 *            {type: "case-sensitive", targets:0}
 *       ]
 *   });
 **/
DataTable.ext.type.order['case-sensitive-asc'] = function (a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    return 0;
};
DataTable.ext.type.order['case-sensitive-desc'] = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (a < b) {
        return 1;
    }
    return 0;
};


export default DataTable;
