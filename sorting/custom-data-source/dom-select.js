/**
 * Read information from a column of select (drop down) menus and return an
 * array to use as a basis for sorting.
 *  @name Select menu data source
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

$.fn.dataTableExt.afnSortData['dom-select'] = function ( oSettings, iColumn )
{
	var aData = [];
	$( 'td:eq('+iColumn+') select', oSettings.oApi._fnGetTrNodes(oSettings) ).each( function () {
	    aData.push( $(this).val() );
	} );
	return aData;
};
