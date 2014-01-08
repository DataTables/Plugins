/**
 * When DataTables removes columns from the display (bVisible or 
 * fnSetColumnVis) it removes these elements from the DOM, effecting the index
 * value for the column positions. This function converts the visible column
 * index into a data column index (i.e. all columns regardless of visibility).
 *
 *  @name fnVisibleToColumnIndex
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    
 */

jQuery.fn.dataTableExt.oApi.fnVisibleToColumnIndex = function ( oSettings, iMatch )
{
	return oSettings.oApi._fnVisibleToColumnIndex( oSettings, iMatch );
};
