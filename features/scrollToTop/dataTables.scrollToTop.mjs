/*! © SpryMedia Ltd - datatables.net/license */

import $ from 'jquery';
import DataTable from 'datatables.net';

/**
 * @summary     scrollToTop
 * @description Always return to top of table when page changed
 * @version     1.0.0
 * @author      SpryMedia Ltd
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */
// Automatic initialisation listener
$(document).on('preInit.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
        return;
    }
    if (settings.oInit.scrollToTop || DataTable.defaults.scrollToTop) {
        var api = new DataTable.Api(settings);
        api.on('page', function () {
            setTimeout(function () {
                $(document).scrollTop($(api.table().container()).offset().top);
            }, 10);
        });
    }
});


export default DataTable;
