

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		var jq = require('jquery');
		var cjsRequires = function (root, $) {
			if ( ! $.fn.dataTable ) {
				require('datatables.net')(root, $);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root, $) {
				if ( ! root ) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				if ( ! $ ) {
					$ = jq( root );
				}

				cjsRequires( root, $ );
				return factory( $, root, root.document );
			};
		}
		else {
			cjsRequires( window, jq );
			module.exports = factory( jq, window, window.document );
		}
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document ) {
'use strict';
var DataTable = $.fn.dataTable;

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
    $('span.dt-order-number', table.table().header()).remove();
}
/** Draw in new indicators for the currently applied order */
function draw(table) {
    var order = table.order();
    if (order.length > 1) {
        for (var i = 0; i < order.length; i++) {
            var col = table.column(order[i][0]);
            var cell = col.header();
            if (!col.visible()) {
                continue;
            }
            $('<span>')
                .addClass('dt-order-number')
                .text(i + 1)
                .appendTo(cell);
        }
    }
}
// Listen for DataTable's initialisation's so we can check if the plug-in should
// be automatically activated or not.
$('body').on('init.dt', function (e, settings) {
    if (e.namespace !== 'dt') {
        return;
    }
    var enable = settings.oInit.orderNumbers || DataTable.defaults.orderNumbers;
    if (enable) {
        orderNumbers(settings);
    }
});
DataTable.orderNumbers = orderNumbers;


return DataTable;
}));
