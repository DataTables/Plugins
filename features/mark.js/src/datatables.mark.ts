/*!***************************************************
 * datatables.mark.js v3.0.0
 * https://github.com/julmot/datatables.mark.js
 * Copyright (c) 2016–2020, Julian Kühnel, SpryMedia Ltd
 * Released under the MIT license https://git.io/voRZ7
 *****************************************************/

import $ from 'jquery';
import DataTable from 'datatables.net';

declare module 'datatables.net' {
	interface Config {
		mark?: boolean;
	}
}

class MarkDataTables {
	private instance;
	private options;
	private intervalThreshold: number;
	private intervalMs: number;

	constructor(dtInstance, options) {
		if (!($.fn as any).mark || !($.fn as any).unmark) {
			throw new Error('jquery.mark.js is necessary for datatables.mark.js');
		}
		this.instance = dtInstance;
		this.options = typeof options === 'object' ? options : {};
		this.intervalThreshold = 49;
		this.intervalMs = 300;
		this.initMarkListener();
	}

	initMarkListener() {
		let ev = 'draw.dt.dth column-visibility.dt.dth column-reorder.dt.dth';
		ev += ' responsive-display.dt.dth';
		let intvl: any = null;
		this.instance.on(ev, () => {
			const rows = this.instance
				.rows({
					filter: 'applied',
					page: 'current',
				})
				.nodes().length;
			if (rows > this.intervalThreshold) {
				clearTimeout(intvl);
				intvl = setTimeout(() => {
					this.mark();
				}, this.intervalMs);
			}
			else {
				this.mark();
			}
		});
		this.instance.on('destroy', () => {
			this.instance.off(ev);
		});
		this.mark();
	}

	mark() {
		const globalSearch = this.instance.search();
		const $tableBody = $(this.instance.table().body()) as any;
		$tableBody.unmark(this.options);
		if (this.instance.table().rows({ search: 'applied' }).data().length) {
			$tableBody.mark(globalSearch, this.options);
		}
		this.instance
			.columns({
				search: 'applied',
				page: 'current',
			})
			.nodes()
			.each((nodes, colIndex) => {
				const columnSearch = this.instance.column(colIndex).search(),
					searchVal = columnSearch || globalSearch;
				if (searchVal) {
					nodes.forEach(node => {
						($(node) as any).unmark(this.options).mark(searchVal, this.options);
					});
				}
			});
	}
}

$(document).on('init.dt.dth', (event, settings) => {
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
