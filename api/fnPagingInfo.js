/**
 * Get information about the paging settings that DataTables is currently 
 * using to display each page, including the number of records shown, start
 * and end points in the data set etc.
 *  @name fnPagingInfo
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        $('#example').dataTable( {
 *            "fnDrawCallback": function () {
 *            alert( 'Now on page'+ this.fnPagingInfo().iPage );
 *          }
 *        } );
 *    } );
 */

$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
  return {
	"iStart":         oSettings._iDisplayStart,
	"iEnd":           oSettings.fnDisplayEnd(),
	"iLength":        oSettings._iDisplayLength,
	"iTotal":         oSettings.fnRecordsTotal(),
	"iFilteredTotal": oSettings.fnRecordsDisplay(),
	"iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
	"iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
  };
};
