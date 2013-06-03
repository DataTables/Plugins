/**
 * Update the internal data for a TR element based on what is used in the 
 * DOM. You will likely want to call fnDraw() after this function.
 *  @name fnDataUpdate
 *  @anchor fnDataUpdate
 *  @author Lior Gerson
 *
 *  @example
 *    
 */

$.fn.dataTableExt.oApi.fnDataUpdate = function ( oSettings, nRowObject, iRowIndex )
{
	$(nRowObject).find("TD").each( function(i) {
		  var iColIndex = oSettings.oApi._fnVisibleToColumnIndex( oSettings, i );
		  oSettings.oApi._fnSetCellData( oSettings, iRowIndex, iColIndex, $(this).html() );
	} );
};
