/**
 * Set the point at which DataTables will start it's display of data in the
 * table.
 *  @name fnDisplayStart
 *  @anchor fnDisplayStart
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    
 */

$.fn.dataTableExt.oApi.fnDisplayStart = function ( oSettings, iStart, bRedraw )
{
    if ( typeof bRedraw == 'undefined' )
    {
        bRedraw = true;
    }
     
    oSettings._iDisplayStart = iStart;
    oSettings.oApi._fnCalculateEnd( oSettings );
     
    if ( bRedraw )
    {
        oSettings.oApi._fnDraw( oSettings );
    }
};
