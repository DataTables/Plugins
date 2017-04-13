/**
 * @summary     SlidingChild
 * @description Plug-in to show/hide row child data
 * @version     1.0.0
 * @file        slidingchild.js
 * @author      datahandler (www.datahandler.uk)
 * @copyright   Copyright datahandler (www.datahandler.uk)
 * 
 * License      MIT - http://datatables.net/license/mit
 */

/**
 * Example usage
 * @example
 * var table = $('#table_id').DataTable();
 * slidingChild =
 *     new $.fn.dataTable.SlidingChild(table, {
 *         ajax: {
 *             requestType: 'POST',
 *             requestUrl: '/Home/GetChildData',
 *             dataType: 'HTML',
 *             requestDataCallback: myRequestDataCallback
 *         }
 *     });
 */
(function ($) {
    var SlidingChild = function (dt, options) {
        var opts = $.extend({}, SlidingChild.defaults, options);

        // bind to selector click
        $(opts.selector).on('click', function () {
            var $this = $(this);
            var dtRow = $this.is('tr') ? $this : $this.closest('tr');

            if (!dtRow.is('tr')) { return; } // throw error?
            // check row belongs to this table?

            dtRow = dt.row(dtRow);
            toggleChild(dtRow);
        });

        var toggleChild = function (dtRow) {
            // if child already showing, close it.
            if (dtRow.child.isShown()) {
                closeChild(dtRow);
            }
            else {
                // closes existing showing child, if any
                if (opts.toggleChild) closeChild(dt.row('.shown'));

                showChildData(dtRow);
            }
        };
        // code borrowed from the resource at: https://datatables.net/blog/2014-10-02
        var closeChild = function (dtRow) {
            if (dtRow) {
                var showingRow = $(dtRow.node());
                $(opts.sliderSelector, dtRow.child()).slideUp(function () {
                    dtRow.child.remove();
                    showingRow.removeClass('shown');
                    $(dt.table().node()).trigger('childClosed', [dtRow]);
                });
            }
        };

        var showChildData = function (dtRow) {
            if (opts.useRowData) {
                showChildDataFromRow(dtRow);
            }
            else {
                $.ajax({
                    type: opts.ajax.requestType,
                    url: opts.ajax.requestUrl,
                    beforeSend: function(xhr, settings) {
                        if (opts.ajax.requestDataCallback) {
                            this.data = opts.ajax.requestDataCallback(dtRow);
                        }
                    },
                    contentType: opts.ajax.contentType,
                    dataType: opts.ajax.dataType,
                    success: function (response) {
                        var data = response;
                        if (opts.dataFormatCallback) {
                            data = opts.dataFormatCallback(response);
                        }
                        showChild(dtRow, data);
                    },
                    error: function (response) { showChild(dtRow, response); }
                });
            }
        };

        var showChildDataFromRow = function(dtRow) {
            if (!opts.dataFormatCallback) { return; } // throw error?
            var data = opts.dataFormatCallback(dtRow.data());
            showChild(dtRow, data);
        }

        var showChild = function(dtRow, data) {
            var selectedRow = $(dtRow.node());
            dtRow.child(data).show();

            $(opts.sliderSelector, dtRow.child()).slideDown(function () {
                selectedRow.addClass('shown');

                $(dt.table().node()).trigger('childShown', [dtRow]);
            });
        };
    };

    SlidingChild.defaults = {
        selector: "tr",
        toggleChild: false,
        useRowData: false,
        ajax: {
            requestType: "GET",
            requestDataCallback: null,
            requestUrl: null,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        },
        dataFormatCallback: null,
        sliderSelector: 'div.slider'
    };

    $.fn.dataTable.SlidingChild = SlidingChild;
    $.fn.DataTable.SlidingChild = SlidingChild;    
}(jQuery));
