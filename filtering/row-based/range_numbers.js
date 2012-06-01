/**
 * Filter a specific numeric column on the value being between two given 
 * numbers. Note that you will likely need to change the id's on the inputs
 * and the column in which the numeric value is given.
 *  @name Range filtering (numbers)
 *  @anchor range_numbers
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        // Initialise datatables
 *        var oTable = $('#example').dataTable();
 *         
 *        // Add event listeners to the two range filtering inputs
 *        $('#min').keyup( function() { oTable.fnDraw(); } );
 *        $('#max').keyup( function() { oTable.fnDraw(); } );
 *    } );
 */

jQuery.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var iColumn = 3;
		var iMin = document.getElementById('min').value * 1;
		var iMax = document.getElementById('max').value * 1;
		 
		var iVersion = aData[iColumn] == "-" ? 0 : aData[iColumn]*1;
		if ( iMin == "" && iMax == "" )
		{
			return true;
		}
		else if ( iMin == "" && iVersion < iMax )
		{
			return true;
		}
		else if ( iMin < iVersion && "" == iMax )
		{
			return true;
		}
		else if ( iMin < iVersion && iVersion < iMax )
		{
			return true;
		}
		return false;
	}
);
