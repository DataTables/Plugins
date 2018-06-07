/**
 * @summary     SlidingChild
 * @description Show/Hide child data plug-in
 * @version     1.0.1
 * @file        datatables.slidingChild.js
 * @author      datahandler (www.datahandler.uk)
 * @copyright   Copyright 2017 datahandler.
 */
(function ($) {
    var SlidingChild = function (dt, options) {
        var opts = $.extend({}, SlidingChild.defaults, options);

        $(dt.table().node(), '>tbody').on('click', opts.selector, function() {          
            var $this = $(this);
            var tr = $this.is('tr') ? $this : $this.closest('tr');

            if (!tr.is('tr')) { return; } // throw error?
            
            var row = dt.row(tr);            
            toggleChild(row);
        });

        var toggleChild = function (dtRow) {
            if (dtRow.child.isShown()) {
                closeChild(dtRow);
            }
            else {                
                var existingShownDtRow = dt.row('.shown');
                if (existingShownDtRow.length && opts.toggleChild) {                    
                    closeChild(existingShownDtRow);             
                }

                showChildData(dtRow);
            }
        };
        // code borrowed from the resource at: https://datatables.net/blog/2014-10-02
        var closeChild = function (dtRow) {            
            var showingRow = $(dtRow.node());
            $(opts.sliderSelector, dtRow.child()).slideUp(opts.animationSpeed, function () {
                dtRow.child.remove();
                showingRow.removeClass('shown');
                if (opts.onHidden !== null) {
                    opts.onHidden(dtRow);
                }
            });
        };

        var showChildData = function (dtRow) {
            if (opts.ajax.requestUrl === null) {                
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
            var data = opts.dataFormatCallback(dtRow);
            showChild(dtRow, data);
        };

        var showChild = function(dtRow, data) {            
            var selectedRow = $(dtRow.node());
            dtRow.child(data, opts.childClass).show();

            $(opts.sliderSelector, dtRow.child()).slideDown(opts.animationSpeed, function () {
                selectedRow.addClass('shown');

                if (opts.onShown !== null) {
                    opts.onShown(dtRow);
                }
            });
        };
    };

    SlidingChild.defaults = {
        selector: "tr",
        toggleChild: true,
        animationSpeed: 200,
        ajax: {
            requestType: "GET",
            requestDataCallback: null,
            requestUrl: null,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: "json"
        },
        dataFormatCallback: null,
        sliderSelector: 'div.slider',
        childClass: null,
        onShown: null,
        onHidden: null
    };

    $.fn.dataTable.SlidingChild = SlidingChild;
    $.fn.DataTable.SlidingChild = SlidingChild;    
}(jQuery));
