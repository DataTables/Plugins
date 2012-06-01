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
	if ( typeof bRegex == 'undefined' ) {
		bRegex = false;
	}
	 
	if ( typeof bSmart == 'undefined' ) {
		bSmart = true;
	}
	 
	for (var i in this.dataTableSettings) {
		jQuery.fn.dataTableExt.iApiIndex = i;
		this.fnFilter(sInput, iColumn, bRegex, bSmart);
	}

	jQuery.fn.dataTableExt.iApiIndex = 0;
};
