/**
 * DataTables has a built in type called 'html' which will strip HTML tags 
 * from a search string, but it doesn't cope with nested HTML inside another 
 * element's attributes (for example DOM0 events with have HTML in them). This
 * plug-in function overrules the built-in method and provides complete HTML
 * tag removal. Note that this function is not included in DataTables by
 * default because it is slightly slower than the built-in method, which is
 * good enough for by far the majority of use cases.
 *  @name html
 *  @anchor html_column
 *  @author <i>guillimon</i>
 *
 *  @example
 *    $(document).ready(function() {
 *        var oTable = $('#example').dataTable({
 *            "aoColumns": [
 *                "sType": "html",
 *                null
 *            ]
 *        });
 *    } );
 */

jQuery.fn.dataTableExt.ofnSearch['html'] = function ( sData ) {
	var n = document.createElement('div');
	n.innerHTML = sData;
	if ( n.textContent ) {
		return n.textContent.replace(/\n/g," ");
	} else {
		return n.innerText.replace(/\n/g," ");
	}
};
