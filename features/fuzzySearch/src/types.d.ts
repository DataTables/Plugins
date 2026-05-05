
import DataTables, { Api, ColumnSelector } from 'datatables.net';

export default DataTables;


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Options {
		fuzzySearch?:
			| boolean
			| {
					columns?: ColumnSelector;
					rankColumn?: number;
					threshold?: number;
					toggleSmart?: boolean;
			  };
	}

	interface Row {
		_fuzzySearch?: any;
	}

	interface StateLoad {
		_fuzzySearch: {
			active: 'true' | 'false';
			val: any;
		};
	}

	interface ApiSearch<T> {
		fuzzy: (input: string) => Api;
	}
}
