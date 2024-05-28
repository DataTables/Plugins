
import DataTables, {Api} from 'datatables.net';

export default DataTables;


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Feature {
		/** Paging control with `input` element for typing a page number */
		inputPaging?: {
			/** Show the first / last buttons for paging control */
			firstLast?: boolean;

			/** Show the previous / next buttons for paging control */
			previousNext?: boolean;

			/** Show the `/ {pages}` string after the `input` element */
			pageOf?: boolean;
		}
	}
}
