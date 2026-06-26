/*! © SpryMedia Ltd - datatables.net/license */

/**
 * This feature plug-in for DataTables will automatically change the DataTables
 * page length in order to fit inside its container. This can be particularly
 * useful for control panels and other interfaces which resize dynamically with
 * the user's browser window instead of scrolling.
 *
 * Page resizing in DataTables can be enabled by using any one of the following
 * options:
 *
 * * Adding the class `pageResize` to the HTML table
 * * Setting the `pageResize` parameter in the DataTables initialisation to be
 *   true - i.e. `pageResize: true`
 * * Setting the `pageResize` parameter to be true in the DataTables defaults
 *   (thus causing all tables to have this feature) - i.e.
 *   `DataTable.defaults.pageResize = true`.
 * * Creating a new instance: `new DataTable.PageResize( table );` where `table`
 *   is a DataTable's API instance.
 *
 * For more detailed information please [see this blog
 * post](http://datatables.net/blog/2015-04-10).
 *
 * @summary     PageResize
 * @description Automatically alter the DataTables page length to fit the table
 *   into a container
 * @author      SpryMedia Ltd
 * @license     MIT
 * @requires    DataTables 3+
 */

import DataTable, { Api, Context, Dom } from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStatic {
		/** Automatically alter the DataTables page length to fit the table into a container */
		PageResize: typeof PageResize;
	}

	interface Config {
		pageResize?: boolean;
		pageResizeManualDelta?: number;
	}

	interface Defaults {
		pageResize?: boolean;
		pageResizeManualDelta?: number;
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
	delta: number | string;
	obj: Dom;
}

interface ISizes {
	offsetTop: number;
	tableHeight: number;
	containerHeight: number;
	headerHeight: number;
	footerHeight: number;
}

class PageResize {
	private s: ISettings;
	private sizes: ISizes;

	constructor(dt: Api, pageResizeManualDelta?: number) {
		var table = dt.table();

		this.s = {
			dt: dt,
			host: Dom.s(table.container()).parent(),
			header: Dom.s(table.header()),
			footer: Dom.s(table.footer()),
			body: Dom.s(table.body()),
			container: Dom.s(table.container()),
			table: Dom.s(table.node()),
			delta: pageResizeManualDelta || 0,
			obj: Dom.c('object')
		};

		this.sizes = {
			offsetTop: this._getOffsetTop(),
			tableHeight: this._getTableHeight(),
			containerHeight: this._getContainerHeight(),
			headerHeight: this._getHeaderHeight(),
			footerHeight: this._getFooterHeight()
		};

		var host = this.s.host;
		if (host.css('position') === 'static') {
			host.css('position', 'relative');
		}

		var onDestroy = () => {
			dt.off('.pageResize', onDestroy);
			this.s.obj && this.s.obj.remove();
		};

		dt.on('destroy.pageResize', onDestroy);

		this._attach();

		// Delay the initial sizing until the table is fully initialized
		// such that the pagination element is also added and can be taken
		// into account.
		var initEvent = 'init.pageResize';
		dt.on(initEvent, () => {
			dt.off(initEvent);
			this._size();
		});
	}

	private _size() {
		var settings = this.s;
		var dt = settings.dt;
		var t = dt.table();
		var rows = settings.body.find('tr');
		var rowHeight = rows.eq(rows.length > 1 ? 1 : 0).height(); // Attempt to use the second row if poss, for top and bottom border
		var availableHeight = settings.host.height();
		var scrolling = t.header().parentNode !== t.body().parentNode;
		var delta = settings.delta;

		var offsetTop = (this.sizes.offsetTop = this._getOffsetTop());
		var tableHeight = (this.sizes.tableHeight = this._getTableHeight());
		var containerHeight = (this.sizes.containerHeight =
			this._getContainerHeight());
		var headerHeight = (this.sizes.headerHeight = this._getHeaderHeight());
		var footerHeight = (this.sizes.footerHeight = this._getFooterHeight());

		// Subtract the height of the header, footer and the elements
		// surrounding the table
		if (!scrolling) {
			if (t.header()) {
				availableHeight -= headerHeight;
			}
			if (t.footer()) {
				availableHeight -= footerHeight;
			}
		}
		availableHeight -= offsetTop;
		availableHeight -= containerHeight - (offsetTop + tableHeight);

		if (!isNaN(parseFloat(delta as any)) && isFinite(delta as any)) {
			availableHeight -= delta as any;
		}

		var drawRows = Math.floor(availableHeight / rowHeight);

		if (
			drawRows !== Infinity &&
			drawRows !== -Infinity &&
			!isNaN(drawRows) &&
			drawRows > 0 &&
			drawRows !== dt.page.len()
		) {
			dt.page.len(drawRows).draw();
		}
	}

	private _attach() {
		// There is no `resize` event for elements, so to trigger this effect,
		// create an empty HTML document using an <object> which will issue a
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
				zIndex: '-1'
			})
			.attr('type', 'text/html');

		obj[0].onload = function () {
			var contentDocument = (this as any).contentDocument;
			var body = contentDocument.body;
			var height = body.offsetHeight;

			contentDocument.defaultView.onresize = function () {
				var newHeight = body.clientHeight || body.offsetHeight;
				if (newHeight !== height) {
					height = newHeight;
					that._size();
					return;
				}

				// Width changes might lead to layout changes, which might require
				// resizing the table
				if (
					that.sizes.offsetTop !== that._getOffsetTop() ||
					that.sizes.containerHeight !== that._getContainerHeight() ||
					that.sizes.tableHeight !== that._getTableHeight() ||
					that.sizes.headerHeight !== that._getHeaderHeight() ||
					that.sizes.footerHeight !== that._getFooterHeight()
				) {
					that._size();
					return;
				}
			};
		};

		obj.appendTo(this.s.host).attr('data', 'about:blank');

		this.s.obj = obj;
	}

	_getOffsetTop() {
		return Dom.s(this.s.table).offset().top;
	}
	private _getTableHeight() {
		return this.s.table.height();
	}
	private _getContainerHeight() {
		return this.s.container.height();
	}
	private _getHeaderHeight() {
		return this.s.dt.table().header() ? this.s.header.height() : 0;
	}
	private _getFooterHeight() {
		return this.s.dt.table().footer() ? this.s.footer.height() : 0;
	}
}

DataTable.PageResize = PageResize;

// Automatic initialisation listener
Dom.s(document).on('preInit.dt', function (e, settings: Context) {
	if (e.namespace !== 'dt') {
		return;
	}

	var api = new DataTable.Api(settings);

	if (
		Dom.s(api.table().node()).classHas('pageResize') ||
		settings.init.pageResize ||
		DataTable.defaults.pageResize
	) {
		new PageResize(api, settings.init.pageResizeManualDelta);
	}
});
