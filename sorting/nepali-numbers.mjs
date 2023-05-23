/*! © SpryMedia Ltd, David Konrad - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * Sorts a column containing nepali numbers. Nepali numbers can easily be
 * mapped 1:1 to latin numbers - १ = 1, २ = 2, १२ = 12 and so on.
 *
 * <https://en.wikipedia.org/wiki/Numbers_in_Nepali_language>
 * <http://www.imnepal.com/nepali-numbers>
 * <http://stackoverflow.com/q/26856481/1407478>
 * <http://jsfiddle.net/ft7f16yt>
 *
 *  @name Nepali numbers
 *  @summary Sorts columns containing UTF8 nepali numbers
 *  @author David Konrad
 *
 *  @example
 *    $('#example').DataTable( {
 *       columnDefs: [
 *         { type: 'nepali-numbers', targets: 0 }
 *       ]
 *    } );
 */
function nepaliToLatin(nepali) {
    switch (nepali) {
        case '०':
            return 0;
            break;
        case '१':
            return 1;
            break;
        case '२':
            return 2;
            break;
        case '३':
            return 3;
            break;
        case '४':
            return 4;
            break;
        case '५':
            return 5;
            break;
        case '६':
            return 6;
            break;
        case '७':
            return 7;
            break;
        case '८':
            return 8;
            break;
        case '९':
            return 9;
            break;
        default:
            return 0;
            break;
    }
}
DataTable.ext.type.order['nepali-numbers-pre'] = function (a) {
    var latin = '', i = 0;
    for (i; i < a.length; i++) {
        latin += nepaliToLatin(a.charAt(i));
    }
    return parseInt(latin, 10);
};


export default DataTable;
