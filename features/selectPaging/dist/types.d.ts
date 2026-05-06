
import DataTables, {Api} from 'datatables.net';

export default DataTables;


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Feature {
		/** Paging control with `select` element for choosing a page number */
		selectPaging?: {
			/** Show the first / last buttons for paging control */
			firstLast?: boolean;

			/** Show the previous / next buttons for paging control */
			previousNext?: boolean;

			/** Show the `/ {pages}` string after the `select` element */
			pageOf?: boolean;
		}
	}
}
