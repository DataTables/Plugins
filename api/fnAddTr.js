/**
 * Take a TR element and add it to a DataTables table. Useful for maintaining
 * custom classes and other attributes. If mRow parameter is set, update
 * mRow instead of adding a new row.
 *  @name fnAddTr
 *  @anchor fnAddTr
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *
 */

$.fn.dataTableExt.oApi.fnAddTr = function ( oSettings, nTr, bRedraw, mRow ) {
    if ( typeof bRedraw == 'undefined' )
    {
        bRedraw = true;
    }

    var nTds = nTr.getElementsByTagName('td');
    if ( nTds.length != oSettings.aoColumns.length )
    {
        alert( 'Warning: not adding new TR - columns and TD elements must match' );
        return;
    }

    var aData = [];
    for ( var i=0 ; i<nTds.length ; i++ )
    {
        aData.push( nTds[i].innerHTML );
    }

    if (typeof mRow == 'undefined') {
        /* Add the data and then replace DataTable's generated TR with ours */
        var iIndex = this.oApi._fnAddData( oSettings, aData );
        nTr._DT_RowIndex = iIndex;
        oSettings.aoData[ iIndex ].nTr = nTr;
    } else {
        this.fnUpdate( aData, mRow );
    }

    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

    if ( bRedraw )
    {
        this.oApi._fnReDraw( oSettings );
    }
};
