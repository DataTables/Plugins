/**
 * Get a list of all TR nodes in the table which are not currently visible 
 * (useful for building forms).
 *  @name fnGetHiddenNodes
 *  @anchor fnGetHiddenNodes
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

$.fn.dataTableExt.oApi.fnGetHiddenNodes = function ( oSettings )
{
	/* Note the use of a DataTables 'private' function thought the 'oApi' object */
	var anNodes = this.oApi._fnGetTrNodes( oSettings );
	var anDisplay = $('tbody tr', oSettings.nTable);
	 
	/* Remove nodes which are being displayed */
	for ( var i=0 ; i<anDisplay.length ; i++ )
	{
		var iIndex = jQuery.inArray( anDisplay[i], anNodes );
		if ( iIndex != -1 )
		{
			anNodes.splice( iIndex, 1 );
		}
	}
	 
	/* Fire back the array to the caller */
	return anNodes;
};
