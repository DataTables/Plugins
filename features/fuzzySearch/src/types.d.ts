
import DataTables, {ColumnSelector} from 'datatables.net';

export default DataTables;


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Config {
		fuzzySearch?:
			| boolean
			| {
					columns?: ColumnSelector;
					rankColumn?: number;
					threshold?: number;
					toggleSmart?: boolean;
			  };
	}

	interface State {
		_fuzzySearch: {
			active: 'true' | 'false';
			val: any;
		};
	}
}
