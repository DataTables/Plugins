/*! © SpryMedia Ltd - datatables.net/license */

/**
 * This feature will fade out rows which don't match from the input
 *
 * @name        SearchFade
 * @summary     Search and Fade unmatching rows in a DataTables
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'searchFade'
 *     }
 *   });
 */

import DataTable, { Api, Context, Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStatic {
		/** Search and Fade unmatching rows in a DataTables */
		SearchFade: typeof SearchFade;
	}

	interface Options {
		searchFade?: boolean;
	}

	interface Defaults {
		searchFade?: boolean;
	}

	interface Api<T> {
		searchFade: ApiSearchFade<T>;
	}

	interface ApiSearchFade<T> {
		(): ApiSearchFadeMethods<T>;
	}

	interface ApiSearchFadeMethods<T> extends Api<T> {
		node(): Dom | null;
	}

	interface Feature {
		searchFade?: {};
	}

	interface Context {
		searchFadeNode: Dom;
	}
}

DataTable.Api.register('searchFade()', function (this: Api) {
	return this;
});

DataTable.Api.register('searchFade().node()', function (this: Api) {
	return this.settings()[0].searchFadeNode;
});

class SearchFade {
	private searchFade: Dom;
	private input: Dom;

	constructor(settings: Context) {
		var that = this;
		var table = new DataTable.Api(settings);
		var searchFade = Dom.c('div').classAdd('searchFade').append('Search: ');

		table.settings()[0].searchFadeNode = searchFade;
		this.searchFade = searchFade;

		this.input = Dom.c('input')
			.attr('type', 'text')
			.classAdd(['dt-input', 'searchFadeInput'])
			.appendTo(searchFade);

		// Trigger a search
		searchFade.on('keyup redraw', 'input', function () {
			table
				.rows({ page: 'current' })
				.every(function (rowIdx, tableLoop, rowLoop) {
					var present = true;
					var val = that.input.val();

					if (val.length) {
						present = table
							.row(rowIdx)
							.data()
							.some(function (v: string) {
								return v.match(new RegExp(val, 'i')) != null;
							});
					}

					Dom.s(table.row(rowIdx).node()).classToggle(
						'notMatched',
						!present
					);
				});
		});

		table.on('draw', function () {
			searchFade.find('input').trigger('redraw');
		});
	}

	// API method to get the searchFade container node
	public node() {
		return this.searchFade;
	}
}

DataTable.SearchFade = SearchFade;

// Legacy `dom` interface
DataTable.ext.feature.push({
	fnInit: function (settings: Context) {
		var search = new DataTable.SearchFade(settings);
		return search.node();
	},
	cFeature: 'F'
});

// Layout initialisation - use this!
DataTable.feature.register('searchFade', function (settings) {
	var search = new DataTable.SearchFade(settings);
	return search.node();
});

Dom.s(document).on('init.dt', function (e, settings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	if (settings.init.searchFade || DataTable.defaults.searchFade) {
		new DataTable.SearchFade(settings);
	}

	return;
});
