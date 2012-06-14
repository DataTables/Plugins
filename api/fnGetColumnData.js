/**
 * Return an array of table values from a particular column, with various
 * filtering options.
 *  @name fnGetColumnData
 *  @anchor fnGetColumnData
 *  @author <a href="http://mind2.de">Benedikt Forchhammer</a>
 *
 *  @example
 *    
 */

jQuery.fn.dataTableExt.oApi.fnGetColumnData = function ( oSettings, iColumn, bUnique, bFiltered, bIgnoreEmpty ) {
	// check that we have a column id
	if ( typeof iColumn == "undefined" ) return [];
	 
	// by default we only wany unique data
	if ( typeof bUnique == "undefined" ) bUnique = true;
	 
	// by default we do want to only look at filtered data
	if ( typeof bFiltered == "undefined" ) bFiltered = true;
	 
	// by default we do not wany to include empty values
	if ( typeof bIgnoreEmpty == "undefined" ) bIgnoreEmpty = true;
	 
	// list of rows which we're going to loop through
	var aiRows;
	 
	// use only filtered rows
	if (bFiltered == true) aiRows = oSettings.aiDisplay; 
	// use all rows
	else aiRows = oSettings.aiDisplayMaster; // all row numbers
 
	// set up data array    
	var asResultData = new Array();
	 
	for (var i=0,c=aiRows.length; i<c; i++) {
		iRow = aiRows[i];
		var sValue = this.fnGetData(iRow, iColumn);
		 
		// ignore empty values?
		if (bIgnoreEmpty == true && sValue.length == 0) continue;
 
		// ignore unique values?
		else if (bUnique == true && jQuery.inArray(sValue, asResultData) > -1) continue;
		 
		// else push the value onto the result data array
		else asResultData.push(sValue);
	}
	 
	return asResultData;
};
