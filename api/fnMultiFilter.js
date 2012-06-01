/**
 * This plug-in adds to DataTables the ability to set multiple column 
 * filtering terms in a single call (particularly useful if using server-side 
 * processing). Used in combination with the column sName parameter, simply
 * pass in an object with the key/value pair being the column you wish to
 * search on, and the value you wish to search for.
 *  @name fnMultiFilter
 *  @anchor fnMultiFilter
 *  @author <i>mrkevans</i>
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable( {
 *            "aoColumns": [
 *                { "sName": "engine" },
 *                { "sName": "browser" },
 *                { "sName": "platform" },
 *                { "sName": "version" },
 *                { "sName": "grade" }
 *            ]
 *        } );
 *        oTable.fnMultiFilter( { "engine": "Gecko", "browser": "Cam" } );
 *    } );
 */

$.fn.dataTableExt.oApi.fnMultiFilter = function( oSettings, oData ) {
	for ( var key in oData )
	{
		if ( oData.hasOwnProperty(key) )
		{
			for ( var i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				if( oSettings.aoColumns[i].sName == key )
				{
					/* Add single column filter */
					oSettings.aoPreSearchCols[ i ].sSearch = oData[key];
					break;
				}
			}
		}
	}
	this.oApi._fnDraw( oSettings );
};
