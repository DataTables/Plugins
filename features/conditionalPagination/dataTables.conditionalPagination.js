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
 *     $('#myTable').DataTable({
 *         conditionalPagination: {
 *             enable: true,
 *             fade: {
 *                 enable: true,
 *                 speed: 'fast'
 *             }
 *         }
 *     });
 */

(function(window, document, $) {
    $(document).on('init.dt', function(e, settings) {
        if ($.isPlainObject(settings.oInit.conditionalPagination) && settings.oInit.conditionalPagination.enable) {
            var api = new $.fn.dataTable.Api(settings),
                fade = settings.oInit.conditionalPagination.fade,
                fadeSpeed = 'slow',
                fadeEnable = false,
                conditionalPagination = function() {
                    var $pagination = $(api.table().container()).find('div.dataTables_paginate');

                    if (api.page.info().pages <= 1) {
                        if (fadeEnable) {
                            $pagination.stop().fadeOut(fadeSpeed);
                        }
                        else {
                            $pagination.hide();
                        }
                    }
                    else {
                        if (fadeEnable) {
                            $pagination.stop().fadeIn(fadeSpeed);
                        }
                        else {
                            $pagination.show();
                        }
                    }
                };

            if ($.isPlainObject(fade)) {
                if (fade.enable === true) {
                    fadeEnable = true;
                }

                if ($.isNumeric(fade.speed) || $.type(fade.speed) === 'string') {
                    fadeSpeed = fade.speed;
                }
            }

            conditionalPagination();

            api.on('draw.dt', conditionalPagination);
        }
    });
})(window, document, jQuery);