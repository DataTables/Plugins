/**
 * Read information from a column of input (type text) elements and return an
 * array to use as a basis for sorting.
 *  @name Input element data source
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

$.fn.dataTableExt.afnSortData['dom-text'] = function ( oSettings, iColumn )
{
	var aData = [];
	$( 'td:eq('+iColumn+') input', oSettings.oApi._fnGetTrNodes(oSettings) ).each( function () {
	    aData.push( this.value );
	} );
	return aData;
};
