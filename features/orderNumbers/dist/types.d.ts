
import DataTables, {Api} from 'datatables.net';

export default DataTables;


export interface OrderNumbers {
	enable: boolean;

	className: string;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Config {
		orderNumbers?: undefined | boolean | Partial<OrderNumbers>;
	}

	interface DataTablesStatic {
		/**
		 * Add event listeners to apply orderNumbers to a table
		 *
		 * @param src An element, selector, or DataTables API or settings object
		 */
		orderNumbers: (src: any, opts: OrderNumbers) => void;
	}
}
