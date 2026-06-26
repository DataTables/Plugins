/*! © SpryMedia Ltd - datatables.net/license/mit */

/**
 * This feature plug-in for DataTables will automatically change the height of a
 * scrolling DataTable to fit inside its container. This can be particularly
 * useful for control panels and other interfaces which resize dynamically with
 * the user's browser window.
 *
 * Page resizing in DataTables can be enabled by using any one of the following
 * options:
 *
 * * Setting the `scrollResize` parameter in the DataTables initialisation to be
 *   true - i.e. `scrollResize: true`
 * * Setting the `scrollResize` parameter to be true in the DataTables defaults
 *   (thus causing all tables to have this feature) - i.e.
 *   `DataTable.defaults.scrollResize = true`.
 * * Creating a new instance: `new DataTable.ScrollResize( table );` where
 *   `table` is a DataTable's API instance.
 *
 * @summary     ScrollResize
 * @description Automatically alter the DataTables page length to fit the table
     into a container
 * @author      SpryMedia Ltd
 * @requires    DataTables 3+
 */

import DataTable, { Api, Context, Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStatic {
		/**
		 * Automatically alter the DataTables page length to fit the table into
		 * a container
		 */
		ScrollResize: typeof ScrollResize;
	}

	interface Defaults {
		scrollResize?: boolean;
	}

	interface Config {
		scrollResize?: boolean;
	}
}

interface ISettings {
	dt: Api;
	host: Dom;
	header: Dom;
	footer: Dom;
	body: Dom;
	container: Dom;
	table: Dom;
	obj: Dom;
}

class ScrollResize {
	private s: ISettings;

	constructor(dt: Api) {
		var that = this;
		var table = dt.table();

		this.s = {
			dt: dt,
			host: Dom.s(table.container()).parent(),
			header: Dom.s(table.header()),
			footer: Dom.s(table.footer()),
			body: Dom.s(table.body()),
			container: Dom.s(table.container()),
			table: Dom.s(table.node()),
			obj: Dom.c('iframe')
		};

		var host = this.s.host;
		if (host.css('position') === 'static') {
			host.css('position', 'relative');
		}

		dt.on('draw.scrollResize', function () {
			that._size();
		});

		dt.on('destroy.scrollResize', () => {
			dt.off('.scrollResize');
			this.s.obj && this.s.obj.remove();
		});

		this._attach();
		this._size();

		// Redraw the header if the scrollbar was visible before feature
		// initialization, but no longer after initialization. Otherwise,
		// the header width would differ from the body width, because the
		// scrollbar is no longer present.
		var settings = dt.settings()[0];
		var divBodyEl = settings.scrollBody;
		var scrollBarVis =
			divBodyEl[0].scrollHeight > divBodyEl[0].clientHeight;

		if (settings.scrollBarVis && !scrollBarVis) {
			dt.columns.adjust();
		}
	}

	private _size() {
		var settings = this.s;
		var dt = settings.dt;
		var t = dt.table();
		var offsetTop =
			settings.table.offset()!.top + settings.host.offset()!.top;
		var availableHeight = settings.host.height();
		var scrollBody = Dom.s(t.container()).find('div.dt-scroll-body');

		// Subtract the height of the header, footer and the elements
		// surrounding the table
		availableHeight -= offsetTop;
		availableHeight -=
			settings.container.height() - (offsetTop + scrollBody.height()!);

		scrollBody.css({
			maxHeight: availableHeight + 'px',
			height: availableHeight + 'px'
		});
	}

	private _attach() {
		// There is no `resize` event for elements, so to trigger this effect,
		// create an empty HTML document using an <iframe> which will issue a
		// resize event inside itself when the document resizes. Since it is
		// 100% x 100% that will occur whenever the host element is resized.
		var that = this;
		var obj = this.s.obj
			.css({
				position: 'absolute',
				top: '0',
				left: '0',
				height: '100%',
				width: '100%',
				zIndex: '-1',
				border: '0',
				opacity: '0'
			})
			.attr('frameBorder', '0')
			.attr('src', 'about:blank');

		obj[0].onload = function () {
			var contentDocument = (this as any).contentDocument;
			var body = contentDocument.body;
			var height = body.offsetHeight;
			var contentDoc = contentDocument;
			var defaultView = contentDoc.defaultView || contentDoc.parentWindow;

			defaultView.onresize = function () {
				// Three methods to get the iframe height, to keep all browsers happy
				var newHeight = body.clientHeight || body.offsetHeight;
				var docClientHeight = contentDoc.documentElement.clientHeight;

				if (!newHeight && docClientHeight) {
					newHeight = docClientHeight;
				}

				if (newHeight !== height) {
					height = newHeight;

					that._size();
				}
			};
		};

		obj.appendTo(this.s.host).attr('data', 'about:blank');

		this.s.obj = obj;
	}
}

DataTable.ScrollResize = ScrollResize;

// Automatic initialisation listener
Dom.s(document).on('init.dt', function (e, settings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	var api = new DataTable.Api(settings);

	if (settings.init.scrollResize || DataTable.defaults.scrollResize) {
		new ScrollResize(api);
	}
});
