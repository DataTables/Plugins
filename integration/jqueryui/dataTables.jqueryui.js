/*! DataTables jQuery UI integration
 * Â©2011-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for jQuery UI. This requires jQuery UI and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using jQuery UI. See http://datatables.net/manual/styling/jqueryui
 * for further information.
 */
(function()
{
    var factory = function($, DataTable)
    {
        "use strict";

        var originalDataTable = $.fn.DataTable;
        $.fn.DataTable = function(options)
        {
            var dataTable = originalDataTable.apply(this, [ options ]);

            $(dataTable.table().container()).addClass("ui-widget");

            return dataTable;
        };

        $.extend(true, DataTable.defaults,
        {
            dom: "<'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-tl ui-corner-tr'lfr>" +
                 "t" +
                 "<'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-bl ui-corner-br'ip>",
            renderer: "jqueryui",
        });
        DataTable.defaults.oLanguage.oPaginate.sEllipsis = "..."; // TODO Base DT file needs to be updated with this.

        $.extend(DataTable.ext.classes,
        {
            sFilterInput: "ui-corner-all",
            sFooterTH: "ui-state-default",
            sHeaderTH: "ui-state-default",
            sPageButton: "fg-button ui-button ui-state-default",
            sPageButtonActive: "ui-state-highlight",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate paging_",
            sScrollFoot: "dataTables_scrollFoot ui-state-default",
            sScrollHead: "dataTables_scrollHead ui-state-default",
            sSortAsc: "sorting_asc ui-state-default",
            sSortDesc: "sorting_desc ui-state-default",
            sSortable: "sorting ui-state-default",
            sSortableAsc: "sorting_asc_disabled ui-state-default",
            sSortableDesc: "sorting_desc_disabled ui-state-default",
            sSortableNone: "sorting_disabled ui-state-default",
            sSortIcon: "DataTables_sort_icon",
            sWrapper: "dataTables_wrapper dt-jqueryui",
        });

        DataTable.ext.renderer.header.jqueryui = function(settings, $tableHead, column, classes)
        {
            var sortClass = "";
            if (column.bSortable)
            {
                if ($.inArray("asc", column.asSorting) !== -1)
                {
                    if ($.inArray("desc", column.asSorting) !== -1)
                    {
                        sortClass = "css_right ui-icon ui-icon-carat-2-n-s";
                    }
                    else
                    {
                        sortClass = "css_right ui-icon ui-icon-carat-1-n";
                    }
                }
                else if ($.inArray("desc", column.asSorting) !== -1)
                {
                    sortClass = "css_right ui-icon ui-icon-carat-1-s";
                }
            }

            $("<div>",
            {
                class: "DataTables_sort_wrapper",
            })
            .append($tableHead.contents())
            .append($("<span>",
                    {
                        class: classes.sSortIcon + " " + sortClass,
                    }))
            .appendTo($tableHead);

            $(settings.nTable).on("order.dt", function(event, context, sorting, columns)
            {
                if (context === settings)
                {
                    var $sortIconSpan = $tableHead.find("span." + classes.sSortIcon);

                    $tableHead.removeClass(classes.sSortAsc + " " + classes.sSortDesc);
                    $sortIconSpan.removeClass("css_right ui-icon ui-icon-carat-1-n ui-icon-carat-1-s ui-icon-carat-2-n-s ui-icon-triangle-1-n ui-icon-triangle-1-s");

                    if (columns[column.idx] === "asc")
                    {
                        $tableHead.addClass(classes.sSortAsc);
                        $sortIconSpan.addClass("css_right ui-icon ui-icon-triangle-1-n");
                    }
                    else if (columns[column.idx] === "desc")
                    {
                        $tableHead.addClass(classes.sSortDesc);
                        $sortIconSpan.addClass("css_right ui-icon ui-icon-triangle-1-s");
                    }
                    else
                    {
                        $tableHead.addClass(column.sSortingClass);
                        $sortIconSpan.addClass(sortClass);
                    }
                }
            });
        };

        $.fn.dataTable.ext.renderer.pageButton.jqueryui = function(settings, host, index, buttons, page, pages)
        {
            // IE9 throws an "unknown error" if document.activeElement is used inside an iframe or frame.
            try
            {
                var activeElement = $(document.activeElement).data("dt-idx");

                var buttonClickHandler = function(event)
                {
                    settings.oApi._fnPageChange(settings, event.data.action, true);
                };
                var $host = $(host).empty();
                var buttonIndex = 0;
                var addButton = function($container, button)
                {
                    if ($.isArray(button))
                    {
                        var $buttonDiv = $("<" + (button.DT_el || "div") + ">").appendTo($container);
                        button.forEach(function(subButton)
                        {
                            addButton($buttonDiv, subButton);
                        });
                    }
                    else
                    {
                        var buttonText = "";
                        var disabled = false;
                        var active = false;
                        switch (button)
                        {
                            case "ellipsis":
                            {
                                buttonText = settings.oLanguage.oPaginate.sEllipsis;
                                disabled = true;
                                break;
                            }
                            case "first":
                            {
                                buttonText = settings.oLanguage.oPaginate.sFirst;
                                disabled = page === 0;
                                break;
                            }
                            case "next":
                            {
                                buttonText = settings.oLanguage.oPaginate.sNext;
                                disabled = page === pages - 1;
                                break;
                            }
                            case "previous":
                            {
                                buttonText = settings.oLanguage.oPaginate.sPrevious;
                                disabled = page === 0;
                                break;
                            }
                            case "last":
                            {
                                buttonText = settings.oLanguage.oPaginate.sLast;
                                disabled = page === pages - 1;
                                break;
                            }
                            default:
                            {
                                buttonText = button + 1;
                                active = page === button;
                                disabled = false;
                                break;
                            }
                        }

                        var $buttonAnchor = $("<a>",
                        {
                            "aria-controls": settings.sTableId,
                            class: settings.oClasses.sPageButton + (active ? " " + settings.oClasses.sPageButtonActive : ""),
                            "data-dt-idx": buttonIndex,
                            id: index === 0 && typeof(button) === "string" ? settings.sTableId + "_" + button : null,
                            "tabindex": settings.iTabIndex,
                        })
                        .html(buttonText)
                        .appendTo($container)
                        .button(
                        {
                            disabled: disabled,
                        })
                        .removeClass("ui-corner-all");

                        settings.oApi._fnBindAction($buttonAnchor, { action: button, }, buttonClickHandler);

                        buttonIndex++;
                    }
                };
                buttons.forEach(function(button)
                {
                    addButton($host, button);
                });

                $host.find("a:first").addClass("ui-corner-tl ui-corner-bl");
                $host.find("a:last").addClass("ui-corner-tr ui-corner-br");

                if (activeElement !== null)
                {
                    $(host).find("[data-dt-idx=" + activeElement + "]").focus();
                }
            }
            catch (exception) { }
        };

        /*
         * TableTools jQuery UI compatibility
         * Required TableTools 2.1+
         */
        if (DataTable.TableTools)
        {
            $.extend(true, DataTable.TableTools.classes,
            {
                buttons:
                {
                    normal: "DTTT_button ui-button ui-state-default",
                },
                collection:
                {
                    container: "DTTT_collection ui-buttonset ui-buttonset-multi",
                },
                container: "DTTT_container ui-buttonset ui-buttonset-multi",
            });
        }
    };

    if (typeof(define) === "function" && define.amd)
    {
        define([ "jquery", "datatables" ], factory);
    }
    else if (typeof(exports) === "object")
    {
        // Node/CommonJS
        factory(require("jquery"), require("datatables"));
    }
    else if (typeof(jQuery) !== "undefined")
    {
        factory($, $.fn.dataTable);
    }
})();
