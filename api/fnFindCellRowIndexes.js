/**
 * Search through a table looking for a given string (optionally the search
 * can be restricted to a single column). The return value is an array with
 * the data indexes (from DataTables' internal data store) for any rows which
 * match.
 *  @name fnFindCellRowIndexes
 *  @anchor fnFindCellRowIndexes
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 * 
 *        var a = oTable.fnFindCellRowIndexes( '1.7' ); // Search all columns
 *
 *        var b = oTable.fnFindCellRowIndexes( '1.7', 3 );  // Search only column 3
 *    } );
 */

$.fn.dataTableExt.oApi.fnFindCellRowIndexes = function ( oSettings, sSearch, iColumn )
{
	var
		i,iLen, j, jLen,
		aOut = [], aData;
	 
	for ( i=0, iLen=oSettings.aoData.length ; i<iLen ; i++ )
	{
		aData = oSettings.aoData[i]._aData;
		 
		if ( typeof iColumn == 'undefined' )
		{
			for ( j=0, jLen=aData.length ; j<jLen ; j++ )
			{
				if ( aData[j] == sSearch )
				{
					aOut.push( i );
				}
			}
		}
		else if ( aData[iColumn] == sSearch )
		{
			aOut.push( i );
		}
	}
	 
	return aOut;
};
 