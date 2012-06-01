/**
 * When DataTables removes columns from the display (bVisible or 
 * fnSetColumnVis) it removes these elements from the DOM, effecting the 
 * index value for the column positions. This function converts the data
 * column index (i.e. all columns regardless of visibility) into a visible
 * column index.
 *  @name fnColumnIndexToVisible
 *  @anchor fnColumnIndexToVisible
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    
 */

$.fn.dataTableExt.oApi.fnColumnIndexToVisible = function ( oSettings, iMatch )
{
  return oSettings.oApi._fnColumnIndexToVisible( oSettings, iMatch );
};
