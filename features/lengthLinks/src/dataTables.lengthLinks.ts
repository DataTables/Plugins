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

import DataTable, { Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStatic {
		/** Page length control via links for DataTables */
		LengthLinks(settings: any): void;
	}

	interface Feature {
		lengthLinks?: {}
	}
}

DataTable.LengthLinks = function (inst) {
	var api = new DataTable.Api(inst);
	var settings = api.settings()[0];
	var container = Dom.s('div').classAdd('dt-lengthLinks');
	var lastLength: number | null = null;

	// API so the feature wrapper can return the node to insert
	this.container = function () {
		return container[0];
	};

	// Listen for events to change the page length
	container.on('click.dtll', 'a', function (e) {
		e.preventDefault();
		api.page.len(parseInt(Dom.s(this).data('length'))).draw(false);
	});

	// Update on each draw
	api.on('draw', function () {
		// No point in updating - nothing has changed
		if (api.page.len() === lastLength) {
			return;
		}

		var menu = settings.lengthMenu;
		var lang = menu.length === 2 && Array.isArray(menu[0]) ? menu[1] : menu;
		var lens = menu.length === 2 && Array.isArray(menu[0]) ? menu[0] : menu;

		var out = lens.map((el, i) => {
			return el == api.page.len()
				? '<a class="active" data-length="' + lens[i] + '">' + lang[i] + '</a>'
				: '<a data-length="' + lens[i] + '">' + lang[i] + '</a>';
		});

		container.html(
			settings.language.lengthMenu
				.replace('_MENU_', out.join(' | '))
				.replace('_ENTRIES_', api.i18n('entries', '', 10))
		);
		lastLength = api.page.len();
	});

	api.on('destroy', function () {
		container.off('click.dtll', 'a');
	});
};

// Legacy `dom` option
DataTable.ext.feature.push({
	fnInit: function (settings) {
		var l = new DataTable.LengthLinks(settings);
		return l.container();
	},
	cFeature: 'L',
	sFeature: 'LengthLinks',
});

// Feature registration
DataTable.feature.register('lengthLinks', function (settings) {
	var l = new DataTable.LengthLinks(settings);
	return l.container();
});
