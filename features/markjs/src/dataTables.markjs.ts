/*! © SpryMedia Ltd - datatables.net/license */

/**
 * @summary     Mark.js
 * @description Search term highlighting using the Mark.js library
 * @author      Julian Kühnel, SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * It can sometimes be useful to get a visual indication of where search terms
 * are in a result set, which is exactly that this library does! It uses
 * [Mark.js](https://markjs.io/) to highlight search terms, updating on each
 * draw as required.
 *
 * To enable, make sure you load Mark.js on your page (as well as this plug-in)
 * and then add `mark: true` to your DataTables initialisation.
 *
 * @example
 *   new DataTable('#myTable', {
 *     mark: true
 *   });
 */

import DataTable, { Api, Context, Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface Config {
		mark?: boolean;
	}

	interface Defaults {
		mark?: boolean;
	}
}

declare global {
	interface Window {
		Mark: any; // todo
	}
}

class MarkDataTables {
	private _dt;
	private options;
	private intervalThreshold: number;
	private intervalMs: number;
	private _mark: any;
	private _columnMarks: any[] = [];

	constructor(dt: Api, options: any) {
		if (!window.Mark) {
			throw new Error(
				'Mark.js is necessary for datatables.mark.js and must be ' +
					'accessible at window.Mark'
			);
		}

		this._dt = dt;
		this.options = typeof options === 'object' ? options : {};
		this.intervalThreshold = 49;
		this.intervalMs = 300;
		this._mark = new window.Mark(dt.table().body());
		this._listeners();
	}

	private _listeners() {
		let intvl: any = null;
		let ev =
			'draw.dt.dth ' +
			'column-visibility.dt.dth ' +
			'column-reorder.dt.dth ' +
			'responsive-display.dt.dth';

		this._dt.on(ev, () => {
			const rows = this._dt
				.rows({
					filter: 'applied',
					page: 'current'
				})
				.nodes().length;

			if (rows > this.intervalThreshold) {
				clearTimeout(intvl);

				intvl = setTimeout(() => {
					this._performMark();
				}, this.intervalMs);
			}
			else {
				this._performMark();
			}
		});

		this._dt.on('destroy', () => {
			this._dt.off(ev);
		});

		this._performMark();
	}

	private _performMark() {
		const globalSearch = this._dt.search();

		// Remove any previous highlights
		this._mark.unmark({
			done: () => {
				// Don't want to highlight the "No data" message!
				if (! this._dt.rows({ search: 'applied' }).count()) {
					return;
				}

				// Global search highlighting
				if (globalSearch) {
					this._mark.mark(globalSearch, this.options);
				}

				// Column search highlighting
				this._dt
					.columns({
						search: 'applied',
						page: 'current'
					})
					.nodes()
					.each((nodes, colIndex) => {
						// Remove any previous highlights from the column
						if (this._columnMarks[colIndex]) {
							this._columnMarks[colIndex].unmark();
						}

						const columnSearch = this._dt.column(colIndex).search();

						if (columnSearch) {
							this._columnMarks[colIndex] = new window.Mark(
								nodes
							);
							this._columnMarks[colIndex].mark(
								columnSearch,
								this.options
							);
						}
					});
			}
		});
	}
}

Dom.s(document).on('init.dt.dth', (event, settings: Context) => {
	if (event.namespace !== 'dt') {
		return;
	}

	const dtInstance = new DataTable.Api(settings);
	let options: boolean | undefined = false;

	if (dtInstance.init().mark) {
		options = dtInstance.init().mark;
	}
	else if (DataTable.defaults.mark) {
		options = DataTable.defaults.mark;
	}

	if (!options) {
		return;
	}

	new MarkDataTables(dtInstance, options);
});
