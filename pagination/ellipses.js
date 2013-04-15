/*
 * This plug-in adds another pagination option called ellipses.
 * This will render the pagination control similar to the full_numbers option,
 * except it will add ellipses around the page numbers when applicable.
 * You can set how many page numbers should be displayed with the iShowPages option.
 * This plug-in also extends the oClasses object with the following properties:
 * sPageEllipsis, sPageNumber and sPageNumbers.
 * Finally, this plug-in extends the oSettings object with the following properties:
 * _iShowPages, _iCurrentPage, _iTotalPages, _iShowPagesHalf, _iFirstPage and _iLastPage.
 * 
 * @name Ellipses
 * @anchor ellipses
 * @author <a href="http://daveden.wordpress.com/">Dave Kennedy</a>
 * @example
 *     $('#my-table').dataTable({
 *         // Optional usage of extended oSettings object
 *         'fnInfoCallback': function(oSettings) {
 *             return 'Viewing page ' + oSettings._iCurrentPage + ' of ' + oSettings._iTotalPages;
 *         },
 *         // Optional usage of iShowPages option
 *         'iShowPages': 15,
 *         // This is the only required line
 *         'sPaginationType': 'ellipses'
 *     });
 */

$.extend($.fn.dataTableExt.oStdClasses, {
    'sPageEllipsis': 'paginate_ellipsis',
    'sPageNumber': 'paginate_number',
    'sPageNumbers': 'paginate_numbers'
});

$.extend($.fn.dataTableExt.oJUIClasses, {
    'sPageEllipsis': 'paginate_ellipsis',
    'sPageNumber': 'paginate_number',
    'sPageNumbers': 'paginate_numbers'
});

$.fn.dataTableExt.oPagination.ellipses = {
    'fnClickHandler': function(e) {
        var fnCallbackDraw = e.data.fnCallbackDraw,
            oSettings = e.data.oSettings,
            sPage = e.data.sPage;

        if ($(this).is('[disabled]')) {
            return false;
        }

        oSettings.oApi._fnPageChange(oSettings, sPage);
        fnCallbackDraw(oSettings);
        return true;
    },
    'fnInit': function(oSettings, nPager, fnCallbackDraw) {
        var oClasses = oSettings.oClasses,
            oLang = oSettings.oLanguage.oPaginate,
            that = this;

        this.nPager = $(nPager);

        this.nFirst = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageFirst + '">' + oLang.sFirst + '</a>');
        this.nPrevious = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPagePrevious + '">' + oLang.sPrevious + '</a>');
        this.nNext = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageNext + '">' + oLang.sNext + '</a>');
        this.nLast = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageLast + '">' + oLang.sLast + '</a>');

        this.nFirst.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'first' }, that.fnClickHandler);
        this.nPrevious.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'previous' }, that.fnClickHandler);
        this.nNext.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'next' }, that.fnClickHandler);
        this.nLast.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'last' }, that.fnClickHandler);

        this.nNumbers = $('<span class="' + oClasses.sPageNumbers + '"></span>');

        // Render
        this.nPager.append(this.nFirst, this.nPrevious, this.nNumbers, this.nNext, this.nLast);
    },
    'fnUpdate': function(oSettings, fnCallbackDraw) {
        var oClasses = oSettings.oClasses,
            that = this;

        // If iShowPages wasn't included in initialisation options,
        // use default value in global object
        var iShowPages = oSettings.oInit.iShowPages || 5;

        var iCurrentPage = Math.ceil((oSettings._iDisplayStart + 1) / oSettings._iDisplayLength),
            iTotalPages = Math.ceil(oSettings.fnRecordsTotal() / oSettings._iDisplayLength),
            iShowPagesHalf = Math.floor(iShowPages / 2),
            iFirstPage = iCurrentPage - iShowPagesHalf,
            iLastPage = iCurrentPage + iShowPagesHalf;

        if (iTotalPages < iShowPages) {
            iFirstPage = 1;
            iLastPage = iTotalPages;
        } else if (iFirstPage < 1) {
            iFirstPage = 1;
            iLastPage = iShowPages;
        } else if (iLastPage > iTotalPages) {
            iFirstPage = (iTotalPages - iShowPages) + 1;
            iLastPage = iTotalPages;
        }

        // Add these properties to oSettings so we can use them later
        $.extend(oSettings, {
            _iShowPages: iShowPages,
            _iCurrentPage: iCurrentPage,
            _iTotalPages: iTotalPages,
            _iShowPagesHalf: iShowPagesHalf,
            _iFirstPage: iFirstPage,
            _iLastPage: iLastPage
        });

        if (iCurrentPage === 1) {
            this.nFirst.attr('disabled', true);
            this.nPrevious.attr('disabled', true);
        } else {
            this.nFirst.removeAttr('disabled');
            this.nPrevious.removeAttr('disabled');
        }

        if (iCurrentPage === iTotalPages) {
            this.nNext.attr('disabled', true);
            this.nLast.attr('disabled', true);
        } else {
            this.nNext.removeAttr('disabled');
            this.nLast.removeAttr('disabled');
        }

        // Erase and render
        this.nNumbers.html('');

        var i, nNumber;

        for (i = iFirstPage; i <= iLastPage; i++) {
            nNumber = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageNumber + '">' + oSettings.fnFormatNumber(i) + '</a>');

            if (iCurrentPage === i) {
                nNumber.attr('active', true).attr('disabled', true);
            } else {
                nNumber.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': i - 1 }, that.fnClickHandler);
            }

            this.nNumbers.append(nNumber);
        }

        // Add ellipses
        if (1 < iFirstPage) {
            this.nNumbers.prepend('<span class="' + oClasses.sPageEllipsis + '">...</span>');
        }

        if (iLastPage < iTotalPages) {
            this.nNumbers.append('<span class="' + oClasses.sPageEllipsis + '">...</span>');
        }
    }
};