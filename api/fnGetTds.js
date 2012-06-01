/**
 * Get an array of TD nodes from DataTables for a given row, including any 
 * column elements which are hidden.
 *  @name fnGetTds
 *  @anchor fnGetTds
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 *         
 *        // Sort in the order that was origially in the HTML
 *        var anTds = oTable.fnGetTds( $('#example tbody tr:eq(1)')[0] );
 *        console.log( anTds );
 *    } );
 */

$.fn.dataTableExt.oApi.fnGetTds  = function ( oSettings, mTr )
{
    var anTds = [];
    var anVisibleTds = [];
    var iCorrector = 0;
    var nTd, iColumn, iColumns;
     
    /* Take either a TR node or aoData index as the mTr property */
    var iRow = (typeof mTr == 'object') ? 
        oSettings.oApi._fnNodeToDataIndex(oSettings, mTr) : mTr;
    var nTr = oSettings.aoData[iRow].nTr;
     
    /* Get an array of the visible TD elements */
    for ( iColumn=0, iColumns=nTr.childNodes.length ; iColumn<iColumns ; iColumn++ )
    {
        nTd = nTr.childNodes[iColumn];
        if ( nTd.nodeName.toUpperCase() == "TD" )
        {
            anVisibleTds.push( nTd );
        }
    }
     
    /* Construct and array of the combined elements */
    for ( iColumn=0, iColumns=oSettings.aoColumns.length ; iColumn<iColumns ; iColumn++ )
    {
        if ( oSettings.aoColumns[iColumn].bVisible )
        {
            anTds.push( anVisibleTds[iColumn-iCorrector] );
        }
        else
        {
            anTds.push( oSettings.aoData[iRow]._anHidden[iColumn] );
            iCorrector++;
        }
    }
     
    return anTds;
};
