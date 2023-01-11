/**
 * @summary     ConditionalPaging
 * @description Hide paging controls when the amount of pages is <= 1
 * @version     1.0.0
 * @file        dataTables.conditionalPaging.js
 * @author      Matthew Hasbach (https://github.com/mjhasbach)
 * @contact     hasbach.git@gmail.com
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
 *            speed: 500, // optional
 *            showPaginate: false, // show Page-Navigation ("Previous", "1", "Next"), default false
 *            showInfo: false, // show "Showing page 1 of x", default false
 *            showLength: false, // show "Display 10 records per page", default false
 *            showFilter: true, // show "Search", default true
 *            keepVisible: true // if the pagination was showed once, it stays visible - e.g. on searching, default true
 *        }
 *    });
 */

(function (window, document, $) {
    $(document).on('init.dt', function (e, dtSettings) {
        if (e.namespace !== 'dt') {
            return;
        }

        var options = dtSettings.oInit.conditionalPaging || $.fn.dataTable.defaults.conditionalPaging;

        if ($.isPlainObject(options) || options === true) {
            var config = $.isPlainObject(options) ? options : {},
                api = new $.fn.dataTable.Api(dtSettings),
                speed = 'slow',
                conditionalPaging = function (e) {
                    var $elementsToHide = $(),
                        $paging = $(api.table().container()).find('div.dataTables_paginate'),
                        $info = $(api.table().container()).find('div.dataTables_info'),
                        $length = $(api.table().container()).find('div.dataTables_length'),
                        $filter = $(api.table().container()).find('div.dataTables_filter'),
                        pages = api.page.info().pages;

                    if (config.showPaginate === 'undefined' || config.showPaginate !== true)
                        $elementsToHide.push($paging[0]);
                    if (config.showInfo === 'undefined' || config.showInfo !== true)
                        $elementsToHide.push($info[0]);
                    if (config.showLength === 'undefined' || config.showLength !== true)
                        $elementsToHide.push($length[0]);
                    if ((config.showFilter !== 'undefined' && config.showFilter === false))
                        $elementsToHide.push($filter[0]);
                    if ((config.keepVisible !== 'undefined' && config.keepVisible === false))
                        config._keepVisible = false;

                    if (e instanceof $.Event) {
                        if (pages <= 1 && !config._keepVisible) {
                            if (config.style === 'fade') {
                                $elementsToHide.stop().fadeTo(speed, 0);
                            }
                            else {
                                $elementsToHide.css('visibility', 'hidden');
                            }
                        }
                        else {
                            if (config.style === 'fade') {
                                $elementsToHide.stop().fadeTo(speed, 1);
                            }
                            else {
                                $elementsToHide.css('visibility', '');
                            }
                            config._keepVisible = true;
                        }
                    }
                    else if (pages <= 1) {
                        if (config.style === 'fade') {
                            $elementsToHide.css('opacity', 0);
                        }
                        else {
                            $elementsToHide.css('visibility', 'hidden');
                        }
                    }
                };

            if ( config.speed !== undefined ) {
                speed = config.speed;
            }

            conditionalPaging();

            api.on('draw.dt', conditionalPaging);
        }
    });
})(window, document, jQuery);
