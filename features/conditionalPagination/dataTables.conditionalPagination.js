/**
 * @summary     ConditionalPagination
 * @description Hide pagination controls when the amount of pages is <= 1
 * @version     1.0.0
 * @file        dataTables.conditionalPagination.js
 * @author      Matthew Hasbach (https://github.com/mjhasbach)
 * @contact     hasbach.git@gmail.com
 * @copyright   Copyright 2015 Matthew Hasbach
 *
 * License      MIT - http://datatables.net/license/mit
 *
 * This feature plugin for DataTables hides pagination controls when the amount
 * of pages is <= 1. The controls can either appear / disappear or fade in / out
 *
 * @example
 *    $('#myTable').DataTable({
 *        conditionalPagination: true
 *    });
 *
 * @example
 *    $('#myTable').DataTable({
 *        conditionalPagination: {
 *            style: 'fade',
 *            speed: 500 // optional
 *        }
 *    });
 */

(function(window, document, $) {
    $(document).on('init.dt', function(e, dtSettings) {
        var options = dtSettings.oInit.conditionalPagination;

        if ($.isPlainObject(options) || options === true) {
            var config = $.isPlainObject(options) ? options : {},
                api = new $.fn.dataTable.Api(dtSettings),
                speed = 'slow',
                conditionalPagination = function() {
                    var $pagination = $(api.table().container()).find('div.dataTables_paginate');

                    if (api.page.info().pages <= 1) {
                        if (config.style === 'fade') {
                            $pagination.stop().fadeTo(speed, 0);
                        }
                        else {
                            $pagination.css('visibility', 'hidden');
                        }
                    }
                    else {
                        if (config.style === 'fade') {
                            $pagination.stop().fadeTo(speed, 1);
                        }
                        else {
                            $pagination.css('visibility', '');
                        }
                    }
                };

            if ($.isNumeric(config.speed) || $.type(config.speed) === 'string') {
                speed = config.speed;
            }

            conditionalPagination();

            api.on('draw.dt', conditionalPagination);
        }
    });
})(window, document, jQuery);