/*! © SpryMedia Ltd - datatables.net/license - 3.0.0-beta.2 */

import DataTable from 'datatables.net';

/**
 * Sorts a column containing chapter numbers. This can be most useful when
 * using DataTables for a book or book reference style application. By
 * default, five sections are supported (a.b.c.d.e) with each being upto
 * four-digits long. Those defaults are controlled by constMaxSections and
 * constMaxSectionDigits respectively, and can be easily changed
 *
 *  @name chapter
 *  @summary Sort book chapters numerically
 *  @author Colin Marks
 *
 *  @example
 *    new DataTable('#example', {
 *       columnDefs: [
 *         { type: 'chapter', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.type.order['chapter-pre'] = function (a) {
    var constMaxSections = 5;
    var constMaxSectionDigits = 4;
    var filler;
    var result = '';
    var sections = a.split('.');
    for (var i = 0; i < constMaxSections; i++) {
        filler =
            i < sections.length
                ? constMaxSectionDigits - sections[i].length
                : constMaxSectionDigits;
        result += filler === 0 ? '' : Array(filler + 1).join('0');
        result += i < sections.length ? sections[i] : '';
    }
    return result;
};


export default DataTable;

