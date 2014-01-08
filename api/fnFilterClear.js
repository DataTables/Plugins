/**
 * Remove all filtering that has been applied to a DataTable, be it column
 * based filtering or global filtering.
 *
 *  @name fnFilterClear
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 *         
 *        // Perform a filter
 *        oTable.fnFilter('Win');
 *        oTable.fnFilter('Trident', 0);
 *         
 *        // Remove all filtering
 *        oTable.fnFilterClear();
 *    } );
 */

jQuery.fn.dataTableExt.oApi.fnFilterClear  = function ( oSettings )
{
	var i, iLen;

	/* Remove global filter */
	oSettings.oPreviousSearch.sSearch = "";

	/* Remove the text of the global filter in the input boxes */
	if ( typeof oSettings.aanFeatures.f != 'undefined' )
	{
		var n = oSettings.aanFeatures.f;
		for ( i=0, iLen=n.length ; i<iLen ; i++ )
		{
			$('input', n[i]).val( '' );
		}
	}

	/* Remove the search text for the column filters - NOTE - if you have input boxes for these
	 * filters, these will need to be reset
	 */
	for ( i=0, iLen=oSettings.aoPreSearchCols.length ; i<iLen ; i++ )
	{
		oSettings.aoPreSearchCols[i].sSearch = "";
	}

	/* Redraw */
	oSettings.oApi._fnReDraw( oSettings );
};
