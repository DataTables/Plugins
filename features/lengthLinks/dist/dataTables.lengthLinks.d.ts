/*! © SpryMedia Ltd - datatables.net/license */
/**
 * @summary     LengthLinks
 * @description Page length control via links for DataTables
 * @author      SpryMedia Ltd
 * @requires    DataTables 3+
 *
 * This feature plug-in for DataTables adds page length control links to the
 * DataTable. The `-init layout` option can be used to insert the control
 * using the `lengthLinks` option.
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'lengthLinks'
 *     }
 *   } );
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'lengthLinks'
 *     },
 *     lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
 *   } );
 */
import { Context } from 'datatables.net';
declare module 'datatables.net' {
    interface DataTablesStatic {
        /** Page length control via links for DataTables */
        LengthLinks: typeof LengthLinks;
    }
    interface Feature {
        lengthLinks?: {};
    }
}
declare class LengthLinks {
    private container;
    constructor(inst: Context);
    node(): HTMLElement;
}
export {};
