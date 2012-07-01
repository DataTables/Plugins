/**
 * Apply the same filter to all DataTable instances on a particular page. The
 * function call exactly matches that used by fnFilter() so regular expression
 * and individual column sorting can be used.
 *  @name fnFilterAll
 *  @anchor fnFilterAll
 *  @author <a href="http://www.kmmtiming.se/">Kristoffer Karlström</a>
 *
 *  @example
 *    $(document).ready(function() {
 *      var oTable = $(".dataTable").dataTable();
 *       
 *      $("#search").keyup( function () {
 *        // Filter on the column (the index) of this element
 *        oTable.fnFilterAll(this.value);
 *      } );
 *    });
 */

$.fn.dataTableExt.oApi.fnFilterAll = function(oSettings, sInput, iColumn, bRegex, bSmart) {
    var settings = $.fn.dataTableSettings;
    
    for ( var i=0 ; i<settings.length ; i++ ) {
      settings[i].oInstance.fnFilter( sInput, iColumn, bRegex, bSmart);
    }
};
