/**
 * Get a list of all TR nodes in the table which are not currently visible 
 * (useful for building forms).
 *  @name fnGetHiddenNodes
 *  @anchor fnGetHiddenNodes
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

$.fn.dataTableExt.oApi.fnGetHiddenNodes = function ( settings )
{
	var nodes;
	var display = $('tbody tr', settings.nTable);

	if ( $.fn.dataTable.versionCheck ) {
		// DataTables 1.10
		var api = new $.fn.dataTable.Api( settings );
		nodes = api.rows().nodes().toArray();
	}
	else {
		// 1.9-
		nodes = this.oApi._fnGetTrNodes( settings );
	}

	/* Remove nodes which are being displayed */
	for ( var i=0 ; i<display.length ; i++ ) {
		var iIndex = jQuery.inArray( display[i], nodes );

		if ( iIndex != -1 ) {
			nodes.splice( iIndex, 1 );
		}
	}

	return nodes;
};
