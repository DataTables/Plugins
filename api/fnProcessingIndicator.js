/**
 * When doing some heavy processing of your own (for example using fnOpen with
 * data loading from the server) it can be useful to make use of the 
 * 'processing' indicator built-into DataTables. This plug-in function
 * exposes the internal DataTables function so it can be used for exactly this.
 *  @name fnProcessingIndicator
 *  @anchor fnProcessingIndicator
 *  @author Allan Chappell
 *
 *  @example
 *    oTable.fnProcessingIndicator();      // On
 *    oTable.fnProcessingIndicator(false); // Off
 */

jQuery.fn.dataTableExt.oApi.fnProcessingIndicator = function ( oSettings, onoff )
{
	if( typeof(onoff) == 'undefined' )
	{
		onoff=true;
	}
	this.oApi._fnProcessingDisplay( oSettings, onoff );
};
