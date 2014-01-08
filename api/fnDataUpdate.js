/**
 * Update the internal data for a TR element based on what is used in the 
 * DOM. You will likely want to call fnDraw() after this function.
 *
 *  @name fnDataUpdate
 *  @summary 
 *  @author Lior Gerson
 *
 *  @example
 *    
 */

jQuery.fn.dataTableExt.oApi.fnDataUpdate = function ( oSettings, nRowObject, iRowIndex )
{
	jQuery(nRowObject).find("TD").each( function(i) {
		  var iColIndex = oSettings.oApi._fnVisibleToColumnIndex( oSettings, i );
		  oSettings.oApi._fnSetCellData( oSettings, iRowIndex, iColIndex, jQuery(this).html() );
	} );
};
