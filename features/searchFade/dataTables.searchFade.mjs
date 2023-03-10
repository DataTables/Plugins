/*! © SpryMedia Ltd - datatables.net/license */

import $ from 'jquery';
import DataTable from 'datatables.net';

/**
 * @summary     SearchFade
 * @description Search and Fade unmatching rows in a DataTables
 * @version     1.0.0
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */
DataTable.Api.register('searchFade()', function () {
    return this;
});
DataTable.Api.register('searchFade().node()', function () {
    return this.settings()[0].searchFadeNode;
});
function _draw(table, searchFade) {
    searchFade.empty();
    searchFade.append('Search: ');
    $('<input type="text" class="searchFadeInput' +
        table.settings()[0].sTableId +
        '">').appendTo(searchFade);
}
DataTable.SearchFade = function (settings) {
    var table = new DataTable.Api(settings);
    var searchFade = $('<div class="searchFade"/>');
    table.settings()[0].searchFadeNode = searchFade;
    _draw(table, searchFade);
    // Trigger a search
    searchFade.on('keyup redraw', 'input', function () {
        table.rows(':visible').every(function (rowIdx, tableLoop, rowLoop) {
            var present = true;
            var val = $('.searchFadeInput' + table.settings()[0].sTableId).val();
            if (val.length) {
                present = table
                    .row(rowIdx)
                    .data()
                    .some(function (v) {
                    return v.match(new RegExp(val, 'i')) != null;
                });
            }
            $(table.row(rowIdx).node()).toggleClass('notMatched', !present);
        });
    });
    table.on('draw', function () {
        $('input', searchFade).trigger('redraw');
    });
    // API method to get the searchFade container node
    this.node = function () {
        return searchFade;
    };
};
DataTable.ext.feature.push({
    fnInit: function (settings) {
        var search = new DataTable.SearchFade(settings);
        return search.node();
    },
    cFeature: 'F',
});
$(document).on('init.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
        return;
    }
    if (settings.oInit.searchFade || DataTable.defaults.searchFade) {
        DataTable.SearchFade(settings);
    }
    return;
});


export default DataTable;
