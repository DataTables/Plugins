/**
 * By default DataTables only uses the sAjaxSource variable at initialisation
 * time, however it can be useful to re-read an Ajax source and have the table
 * update. Typically you would need to use the fnClearTable() and fnAddData()
 * functions, however this wraps it all up in a single function call.
 *  @name fnReloadAjax
 *  @anchor fnReloadAjax
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    // Example call to load a new file
 *    oTable.fnReloadAjax( 'media/examples_support/json_source2.txt' );
 *
 *    // Example call to reload from original file
 *    oTable.fnReloadAjax();
 */

$.fn.dataTableExt.oApi.fnReloadAjax = function ( oSettings, sNewSource, fnCallback, bStandingRedraw )
{
	if ( sNewSource !== undefined && sNewSource !== null ) {
		oSettings.sAjaxSource = sNewSource;
	}

	// Server-side processing should just call fnDraw
	if ( oSettings.oFeatures.bServerSide ) {
		this.fnDraw();
		return;
	}

	this.oApi._fnProcessingDisplay( oSettings, true );
	var that = this;
	var iStart = oSettings._iDisplayStart;
	var aData = [];

	this.oApi._fnServerParams( oSettings, aData );

	oSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aData, function(json) {
		/* Clear the old information from the table */
		that.oApi._fnClearTable( oSettings );

		/* Got the data - add it to the table */
		var aData =  (oSettings.sAjaxDataProp !== "") ?
			that.oApi._fnGetObjectDataFn( oSettings.sAjaxDataProp )( json ) : json;

		for ( var i=0 ; i<aData.length ; i++ )
		{
			that.oApi._fnAddData( oSettings, aData[i] );
		}
		
		oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

		that.fnDraw();

		if ( bStandingRedraw === true )
		{
			oSettings._iDisplayStart = iStart;
			that.oApi._fnCalculateEnd( oSettings );
			that.fnDraw( false );
		}

		that.oApi._fnProcessingDisplay( oSettings, false );

		/* Callback user function - for event handlers etc */
		if ( typeof fnCallback == 'function' && fnCallback !== null )
		{
			fnCallback( oSettings );
		}
	}, oSettings );
};
