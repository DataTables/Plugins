/*! © SpryMedia Ltd, Matthew Hasbach - datatables.net/license */

import jQuery from 'jquery';
import DataTable from 'datatables.net';

// Allow reassignment of the $ variable
let $ = jQuery;

/**
 * @summary     ConditionalPaging
 * @description Hide paging controls when the amount of pages is <= 1
 * @version     1.0.0
 * @author      Matthew Hasbach (https://github.com/mjhasbach)
 * @copyright   Copyright 2015 Matthew Hasbach
 *
 * License      MIT - http://datatables.net/license/mit
 *
 * This feature plugin for DataTables hides paging controls when the amount
 * of pages is <= 1. The controls can either appear / disappear or fade in / out
 *
 * @example
 *    $('#myTable').DataTable({
 *        conditionalPaging: true
 *    });
 *
 * @example
 *    $('#myTable').DataTable({
 *        conditionalPaging: {
 *            style: 'fade',
 *            speed: 500 // optional
 *        }
 *    });
 */
$(document).on('init.dt', function (e, dtSettings) {
    if (e.namespace !== 'dt') {
        return;
    }
    var options = dtSettings.oInit.conditionalPaging ||
        DataTable.defaults.conditionalPaging;
    if ($.isPlainObject(options) || options === true) {
        var config = $.isPlainObject(options) ? options : {}, api = new DataTable.Api(dtSettings), speed = 500, conditionalPaging = function (e) {
            var $paging = $(api.table().container()).find('div.dataTables_paginate'), pages = api.page.info().pages;
            if (e instanceof $.Event) {
                if (pages <= 1) {
                    if (config.style === 'fade') {
                        $paging.stop().fadeTo(speed, 0);
                    }
                    else {
                        $paging.css('visibility', 'hidden');
                    }
                }
                else {
                    if (config.style === 'fade') {
                        $paging.stop().fadeTo(speed, 1);
                    }
                    else {
                        $paging.css('visibility', '');
                    }
                }
            }
            else if (pages <= 1) {
                if (config.style === 'fade') {
                    $paging.css('opacity', 0);
                }
                else {
                    $paging.css('visibility', 'hidden');
                }
            }
        };
        if (config.speed !== undefined) {
            speed = config.speed;
        }
        conditionalPaging(null);
        api.on('draw.dt', conditionalPaging);
    }
});


export default DataTable;
