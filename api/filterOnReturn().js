/**
 * This plug-in removes the default behaviour of DataTables to filter on each
 * keypress, and replaces with it the requirement to press the enter key to
 * perform the filter.
 *
 *  @name filterOnReturn
 *  @summary Require the return key to be pressed to filter a table
 *  @author [Brian Matovu](http://www.bmatovu.com)
 *
 *  @returns {jQuery} jQuery instance
 *
 *  @example
 *    $(document).ready(function() {
 *        var users_dt = $('table[id=tbl_users]').dataTable();
 *        
 *        users_dt.filterOnReturn();
 *    });
 */

jQuery.fn.dataTable.Api.register('filterOnReturn()', function() {
    var dt = this;

    dt.settings().each(function (setting) {
        $.each(setting.aanFeatures.f, function(idx, filter) {
            var dtFilterInput = $('input', filter);
            
            dtFilterInput.unbind();

            dtFilterInput.bind('keyup', function (event) {
                if (event.keyCode == 13) {
                    dt.search(this.value).draw();
                }
            });
        });
    });
});
