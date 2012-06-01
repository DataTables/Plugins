/**
 * Redraw the table (i.e. fnDraw) to take account of sorting and filtering,
 * but retain the current pagination settings.
 *  @name fnStandingRedraw
 *  @anchor fnStandingRedraw
 *  @author Jonathan Hoguet
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('.dataTable').dataTable()
 *        oTable.fnStandingRedraw();
 *    } );
 */

$.fn.dataTableExt.oApi.fnStandingRedraw = function(oSettings) {
    if(oSettings.oFeatures.bServerSide === false){
        var before = oSettings._iDisplayStart;

        oSettings.oApi._fnReDraw(oSettings);

        // iDisplayStart has been reset to zero - so lets change it back
        oSettings._iDisplayStart = before;
        oSettings.oApi._fnCalculateEnd(oSettings);
    }
     
    // draw the 'current' page
    oSettings.oApi._fnDraw(oSettings);
};
