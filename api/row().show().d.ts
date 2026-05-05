/*! © Edouard Labre - datatables.net/license */
/**
 * This plugin jumps to the right page of the DataTable to show the required row
 *
 * @name row().show()
 * @summary See the row in datable by display the right pagination page
 * @author [Edouard Labre](http://www.edouardlabre.com)
 * @requires DataTables 3+
 *
 * @example
 *    // Add an element to a huge table and go to the right pagination page
 *    var table = new DataTable('#example');
 *    var new_row = {
 *      DT_RowId: 'row_example',
 *      name: 'example',
 *      value: 'an example row'
 *    };
 *
 *    table.row.add( new_row ).draw().show().draw(false);
 */
import { Api } from 'datatables.net';
declare module 'datatables.net' {
    interface ApiRowMethods<T> {
        /** See the row in datable by display the right pagination page */
        show(): Api<T>;
    }
}
