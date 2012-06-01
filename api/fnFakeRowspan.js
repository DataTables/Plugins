/**
 * Creates rowspan cells in a column when there are two or more cells in a 
 * row with the same content, effectively grouping them together visually. 
 * <b>Note</b> - this plug-in currently only operates correctly with 
 * <b>server-side processing</b>.
 *  @name fnFakeRowspan
 *  @anchor fnFakeRowspan
 *  @author Fredrik Wendel
 *
 *  @example
 *    $('#example').dataTable().fnFakeRowspan(3);
 */

$.fn.dataTableExt.oApi.fnFakeRowspan = function ( oSettings, iColumn, bCaseSensitive ) {
	/* Fail silently on missing/errorenous parameter data. */
	if (isNaN(iColumn)) {
		return false;
	}
	 
	if (iColumn < 0 || iColumn > oSettings.aoColumns.length-1) {
		alert ('Invalid column number choosen, must be between 0 and ' + (oSettings.aoColumns.length-1));
		return false;
	}
	 
	var oSettings = oSettings,
		iColumn = iColumn,
		bCaseSensitive = (typeof(bCaseSensitive) != 'boolean' ? true : bCaseSensitive);
 
	oSettings.aoDrawCallback.push({ "fn": fakeRowspan, "sName": "fnFakeRowspan" });
 
	function fakeRowspan () {
		var firstOccurance = null,
			value = null, 
			rowspan = 0;
		jQuery.each(oSettings.aoData, function (i, oData) {
			var val = oData._aData[iColumn],
				cell = oData.nTr.childNodes[iColumn];
			/* Use lowercase comparison if not case-sensitive. */
			if (!bCaseSensitive) {
				val = val.toLowerCase();
			}
			/* Reset values on new cell data. */
			if (val != value) {
				value = val;
				firstOccurance = cell;
				rowspan = 0;
			}
			 
			if (val == value) {
				rowspan++;
			}
			 
			if (firstOccurance !== null && val == value && rowspan > 1) {
				oData.nTr.removeChild(cell);
				firstOccurance.rowSpan = rowspan;
			}
		});
	}
	 
	return this;
};
