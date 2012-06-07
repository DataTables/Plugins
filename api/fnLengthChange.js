/**
 * Change the number of records that can be viewed on a single page in 
 * DataTables.
 *  @name fnLengthChange
 *  @anchor fnLengthChange
 *  @author <a href="http://www.webdetails.pt/">Pedro Alves</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable();
 *        oTable.fnLengthChange( 100 );
 *    } );
 */

$.fn.dataTableExt.oApi.fnLengthChange = function ( oSettings, iDisplay )
{
    oSettings._iDisplayLength = iDisplay;
    oSettings.oApi._fnCalculateEnd( oSettings );
     
    /* If we have space to show extra rows (backing up from the end point - then do so */
    if ( oSettings._iDisplayEnd == oSettings.aiDisplay.length )
    {
        oSettings._iDisplayStart = oSettings._iDisplayEnd - oSettings._iDisplayLength;
        if ( oSettings._iDisplayStart < 0 )
        {
            oSettings._iDisplayStart = 0;
        }
    }
     
    if ( oSettings._iDisplayLength == -1 )
    {
        oSettings._iDisplayStart = 0;
    }
     
    oSettings.oApi._fnDraw( oSettings );
     
    if ( oSettings.aanFeatures.l )
    {
        $('select', oSettings.aanFeatures.l).val( iDisplay );
    }
};
