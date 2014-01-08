/**
 * This function will restore the order in which data was read into a 
 * DataTable (for example from an HTML source). Although you can set 
 * aaSorting to be an empty array ([ ]) in order to prevent sorting during 
 * initialisation, it can sometimes be useful to restore the original order
 * after sorting has already occurred - which is exactly what this function
 * does.
 *
 *  @name fnSortNeutral
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 *         
 *        // Sort in the order that was originally in the HTML
 *        oTable.fnSortNeutral();
 *    } );
 */

jQuery.fn.dataTableExt.oApi.fnSortNeutral = function ( oSettings )
{
	/* Remove any current sorting */
	oSettings.aaSorting = [];

	/* Sort display arrays so we get them in numerical order */
	oSettings.aiDisplay.sort( function (x,y) {
		return x-y;
	} );
	oSettings.aiDisplayMaster.sort( function (x,y) {
		return x-y;
	} );

	/* Redraw */
	oSettings.oApi._fnReDraw( oSettings );
};
