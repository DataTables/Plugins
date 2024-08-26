import $ from 'jquery';
import DataTable from 'datatables.net';

/**
 * Add event listeners to apply orderNumbers to a table
 *
 * @param src An element, selector, or DataTables API or settings object
 */
function orderNumbers(src) {
	let table = new DataTable.Api(src);

	table.on('draw.orderNumbers', function () {
		remove(table);
		draw(table);
	});

	table.on('destroy', function () {
		remove(table);
		table.off('draw.orderNumbers');
	});

	// Initial draw
	draw(table);
}

/** Remove all existing indicators */
function remove(table) {
	let className = (table.init().orderNumbers && table.init().orderNumbers.className) ? table.init().orderNumbers.className : 'dt-order-number';
	$('span.' + className, table.table().header()).remove();
}

/** Draw in new indicators for the currently applied order */
function draw(table) {
	let className = (table.init().orderNumbers && table.init().orderNumbers.className) ? table.init().orderNumbers.className : 'dt-order-number';
	var order = table.order();

	if (order.length > 1) {
		for (var i = 0; i < order.length; i++) {
			var col = table.column(order[i][0]);
			var cell = col.header();

			if (! col.visible()) {
				continue;
			}

			$('<span>')
				.addClass(className)
				.text(i + 1)
				.appendTo(cell);
		}
	}
}

// Listen for DataTable's initialisation's so we can check if the plug-in should
// be automatically activated or not.
$(document).on('init.dt', function (e, settings) {
	if (e.namespace !== 'dt') {
		return;
	}

	var enable = settings.oInit.orderNumbers || DataTable.defaults.orderNumbers;

	if (enable) {
		orderNumbers(settings);
	}
});

DataTable.orderNumbers = orderNumbers;
