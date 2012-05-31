/**
 * Read information from a column of checkboxes (input elements with type
 * checkbox) and return an array to use as a basis for sorting.
 *  @name Checkbox data source
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

$.fn.dataTableExt.afnSortData['dom-checkbox'] = function ( oSettings, iColumn )
{
	var aData = [];
	$( 'td:eq('+iColumn+') input', oSettings.oApi._fnGetTrNodes(oSettings) ).each( function () {
		aData.push( this.checked==true ? "1" : "0" );
	} );
	return aData;
};
