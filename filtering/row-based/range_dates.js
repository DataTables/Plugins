/**
 * Filter a column on a specific date range. Note that you will likely need 
 * to change the id's on the inputs and the columns in which the start and 
 * end date exist.
 *  @name Range filtering (dates)
 *  @anchor range_dates
 *  @author <i>guillimon</i>
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 *         
 *        // Add event listeners to the two range filtering inputs
 *        $('#min').keyup( function() { oTable.fnDraw(); } );
 *        $('#max').keyup( function() { oTable.fnDraw(); } );
 *    } );
 */

$.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var iFini = document.getElementById('fini').value;
		var iFfin = document.getElementById('ffin').value;
		var iStartDateCol = 6;
		var iEndDateCol = 7;
		 
		iFini=iFini.substring(6,10) + iFini.substring(3,5)+ iFini.substring(0,2)
		iFfin=iFfin.substring(6,10) + iFfin.substring(3,5)+ iFfin.substring(0,2)        
		 
		var datofini=aData[iStartDateCol].substring(6,10) + aData[iStartDateCol].substring(3,5)+ aData[iStartDateCol].substring(0,2);
		var datoffin=aData[iEndDateCol].substring(6,10) + aData[iEndDateCol].substring(3,5)+ aData[iEndDateCol].substring(0,2);
		 
		if ( iFini == "" && iFfin == "" )
		{
			return true;
		}
		else if ( iFini <= datofini && iFfin == "")
		{
			return true;
		}
		else if ( iFfin >= datoffin && iFini == "")
		{
			return true;
		}
		else if (iFini <= datofini && iFfin >= datoffin)
		{
			return true;
		}
		return false;
	} 
);
