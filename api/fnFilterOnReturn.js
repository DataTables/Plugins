/**
 * This plug-in removed the default behaviour of DataTables to filter on each
 * keypress, and replaces with it the requirement to press the enter key to
 * perform the filter.
 *  @name fnFilterOnReturn
 *  @anchor fnFilterOnReturn
 *  @author <a href="http://www.mvccms.com/">Jon Ranes</a>
 *
 *  @example
 *    $(document).ready(function() {
 *        $('.dataTable').dataTable().fnFilterOnReturn();
 *    } );
 */

jQuery.fn.dataTableExt.oApi.fnFilterOnReturn = function (oSettings) {
	var _that = this;
 
	this.each(function (i) {
		$.fn.dataTableExt.iApiIndex = i;
		var $this = this;
		var anControl = $('input', _that.fnSettings().aanFeatures.f);
		anControl.unbind('keyup').bind('keypress', function (e) {
			if (e.which == 13) {
				$.fn.dataTableExt.iApiIndex = i;
				_that.fnFilter(anControl.val());
			}
		});
		return this;
	});
	return this;
};
