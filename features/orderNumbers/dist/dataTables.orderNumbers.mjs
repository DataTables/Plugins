/*! © SpryMedia Ltd - datatables.net/license - 3.0.0-beta.2 */

import DataTable, { Dom } from 'datatables.net';

/**
 * This feature is for use with a DataTable when multi-column sorting. It will
 * show an icon above each column that is being used for the current sort,
 * indicating the position of that column in the sort sequence.
 *
 * @summary     OrderNumbers
 * @description Display ordering sequence along side the header cell
 * @author      SpryMedia Ltd
 * @copyright   Copyright SpryMedia Ltd.
 * @license     MIT - http://datatables.net/license/mit
 *
 * @example
 *   // Allow a display start point and search string to be specified
 *   new DataTable('#myTable', {
 *     orderNumbers: true
 *   );
 *
 * @example
 *   // As above, but with a default search
 *   new DataTable('#myTable', {
 *     orderNumbers: {
 *       className: 'my-ordering-class'
 *     }
 *   );
 */
/**
 * Add event listeners to apply orderNumbers to a table
 *
 * @param src An element, selector, or DataTables API or settings object
 */
function orderNumbers(src, opts) {
    let table = new DataTable.Api(src);
    table.on('draw.orderNumbers', function () {
        remove(table, opts);
        draw(table, opts);
    });
    table.on('destroy', function () {
        remove(table, opts);
        table.off('draw.orderNumbers');
    });
    // Initial draw
    draw(table, opts);
}
/** Remove all existing indicators */
function remove(table, opts) {
    Dom.s(table.table().header()).find('span.' + opts.className).remove();
}
/** Draw in new indicators for the currently applied order */
function draw(table, opts) {
    var order = table.order();
    if (order.length > 1) {
        for (var i = 0; i < order.length; i++) {
            var col = table.column(order[i][0]);
            var cell = col.header();
            if (!col.visible()) {
                continue;
            }
            Dom.c('span')
                .classAdd(opts.className)
                .text((i + 1).toString())
                .appendTo(cell);
        }
    }
}
function applyOptions(optsOut, optsIn) {
    if (optsIn) {
        if (typeof optsIn === 'boolean') {
            optsOut.enable = optsIn;
        }
        else if (typeof optsIn === 'object') {
            Object.assign(optsOut, optsIn);
            // If `enable` is not given, but the object is, then we assume that
            // the feature should be enabled. Use `enable: false` if you want to
            // disable it.
            if (!optsIn.enable) {
                optsOut.enable = true;
            }
        }
    }
}
// Listen for DataTable's initialisation's so we can check if the plug-in should
// be automatically activated or not.
Dom.s(document).on('init.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
        return;
    }
    let opts = Object.assign({}, orderNumbers.defaults);
    applyOptions(opts, DataTable.defaults.orderNumbers);
    applyOptions(opts, settings.init.orderNumbers);
    if (opts.enable) {
        orderNumbers(settings, opts);
    }
});
orderNumbers.defaults = {
    enable: false,
    className: 'dt-order-number',
};
DataTable.orderNumbers = orderNumbers;


export default DataTable;

