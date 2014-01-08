/**
 * Much like fnFindCellRowIndexes this plug-in will search a table for 
 * matching data (optionally the search can be restricted to a single column), 
 * but in this case the returned array contains TR nodes of the matching rows,
 * rather than data indexes.
 *
 *  @name fnFindCellRowNodes
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 *    
 *        var a = oTable.fnFindCellRowNodes( '1.7' );    // Search all columns
 *    
 *        var b = oTable.fnFindCellRowNodes( '1.7', 3 ); // Search only column 3
 *    } );
 */

jQuery.fn.dataTableExt.oApi.fnFindCellRowNodes = function ( oSettings, sSearch, iColumn )
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
					aOut.push( oSettings.aoData[i].nTr );
				}
			}
		}
		else if ( aData[iColumn] == sSearch )
		{
			aOut.push( oSettings.aoData[i].nTr );
		}
	}

	return aOut;
};
