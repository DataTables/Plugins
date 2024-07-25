
import DataTables, {Api} from 'datatables.net';

export default DataTables;


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Config {
		orderNumbers?: boolean;
	}

	interface DataTablesStatic {
		/**
		 * Add event listeners to apply orderNumbers to a table
		 *
		 * @param src An element, selector, or DataTables API or settings object
		 */
		orderNumbers: (src: any) => void;
	}
}
