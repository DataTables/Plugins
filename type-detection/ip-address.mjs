/*! © SpryMedia Ltd, Brad Wasson - datatables.net/license */

import $ from 'jquery';
import DataTable from 'datatables.net';

/**
 * Automatically detect IP addresses in dot notation. Goes perfectly with the
 * IP address sorting function.
 *
 *  @name IP address detection
 *  @summary Detect data which is in IP address notation
 *  @author Brad Wasson
 */
DataTable.ext.type.detect.unshift(function (data) {
    if (/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(data)) {
        return 'ip-address';
    }
    return null;
});


export default DataTable;
