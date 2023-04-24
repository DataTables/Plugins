/*! © SpryMedia Ltd - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * Externally trigger the display of DataTables' "processing" indicator.
 *
 * Please note that of DataTables 2.0.0 this functionality is now built into
 * DataTables core and this plug-in is no longer required.
 *
 * @name processing()
 * @summary Show / hide the processing indicator via the API
 * @author [Allan Jardine](http://datatables.net)
 * @requires DataTables 1.10+
 * @param {boolean} show `true` to show the processing indicator, `false` to
 *  hide it.
 *
 * @returns {DataTables.Api} Unmodified API instance
 *
 * @example
 *    // Show a processing indicator for two seconds on initialisation
 *    var table = $('#example').DataTable( {
 *      processing: true
 *    } );
 *
 *    table.processing( true );
 *
 *    setTimeout( function () {
 *      table.processing( false );
 *    }, 2000 );
 */
DataTable.Api.register('processing()', function (show) {
    return this.iterator('table', function (ctx) {
        ctx.oApi._fnProcessingDisplay(ctx, show);
    });
});


export default DataTable;
