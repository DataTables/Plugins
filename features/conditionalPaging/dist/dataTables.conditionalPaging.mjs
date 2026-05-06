/*! © SpryMedia Ltd, Matthew Hasbach - datatables.net/license - 3.0.0-beta.2 */

import DataTable, { Dom, util } from 'datatables.net';

/**
 * @summary     ConditionalPaging
 * @description Hide paging controls when the amount of pages is <= 1
 * @author      Matthew Hasbach (https://github.com/mjhasbach)
 * @copyright   Copyright Matthew Hasbach and SpryMedia
 * @license     MIT - http://datatables.net/license/mit
 *
 * This feature plugin for DataTables hides paging controls when the amount
 * of pages is <= 1.
 *
 * @example
 *    new DataTable('#myTable', {
 *        conditionalPaging: true
 *    });
 */
Dom.s(document).on('init.dt', function (e, dtSettings) {
    if (e.namespace !== 'dt') {
        return;
    }
    var options = dtSettings.init.conditionalPaging ||
        DataTable.defaults.conditionalPaging;
    if (util.is.plainObject(options) || options === true) {
        var config = util.is.plainObject(options) ? options : {}, api = new DataTable.Api(dtSettings), conditionalPaging = function (e) {
            var paging = Dom.s(api.table().container()).find('div.dt-paging'), pages = api.page.info().pages;
            paging.css('visibility', pages <= 1 ? 'hidden' : '');
        };
        conditionalPaging(null);
        api.on('draw.dt', conditionalPaging);
    }
});


export default DataTable;

