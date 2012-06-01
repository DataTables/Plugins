/**
 * Take a TR element and alter the table's paging to show the TR in question.
 *  @name fnDisplayRow
 *  @anchor fnDisplayRow
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        // Display the 21st row in the table
 *        var oTable = $('#example').dataTable();
 *        oTable.fnDisplayRow( oTable.fnGetNodes()[20] );
 *    } );
 */

$.fn.dataTableExt.oApi.fnDisplayRow = function ( oSettings, nRow )
{
	// Account for the "display" all case - row is already displayed
	if ( oSettings._iDisplayLength == -1 )
	{
		return;
	}
 
	// Find the node in the table
	var iPos = -1;
	for( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ )
	{
		if( oSettings.aoData[ oSettings.aiDisplay[i] ].nTr == nRow )
		{
			iPos = i;
			break;
		}
	}
	 
	// Alter the start point of the paging display
	if( iPos >= 0 )
	{
		oSettings._iDisplayStart = ( Math.floor(i / oSettings._iDisplayLength) ) * oSettings._iDisplayLength;
		this.oApi._fnCalculateEnd( oSettings );
	}
	 
	this.oApi._fnDraw( oSettings );
};
