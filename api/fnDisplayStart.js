/**
 * Set the point at which DataTables will start it's display of data in the
 * table.
 *
 *  @name fnDisplayStart
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    
 */

jQuery.fn.dataTableExt.oApi.fnDisplayStart = function ( oSettings, iStart, bRedraw )
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
