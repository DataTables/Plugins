/*! © SpryMedia Ltd - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * This plug-in will strip out non-numeric formatting characters such that a
 * formatted number (for example 1,000,000) can be detected automatically and
 * sorted numerically. Note that characters a-z are not automatically removed,
 * otherwise there is a risk of detecting columns as numeric which should not
 * be.
 *
 * DataTables 1.10+ has formatted number type detection and sorting abilities
 * built-in. As such this plug-in is marked as deprecated, but might be useful
 * when working with old versions of DataTables.
 *
 *  @name Formatted numbers
 *  @summary formatted_numbers
 *  @deprecated
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 */
DataTable.ext.type.detect.unshift(function (data) {
    var deformatted = data.replace(/[^\d\-\.\/a-zA-Z]/g, '');
    var isNumeric = !isNaN(deformatted - parseFloat(deformatted));
    return isNumeric || deformatted === '-' ? 'formatted-num' : null;
});


export default DataTable;
