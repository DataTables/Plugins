// TODO
// - Tidy up class names
// - Clean up code into functions
// - Option to have vertical layout class
// - Number of horizontal panels class options
// - Threshold option - require that there is duplicate information in a column before it is used
// - Styling for selected
// - Styling for container / header
// - Styling for clear option
// - State saving integration


(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


function SearchPanes ( settings, opts ) {
	var that = this;
	var table = new DataTable.Api( settings );
	var container = $('<div class="dt-searchPane"/>')
		.appendTo( opts.container );

	table.columns(opts.columns).eq(0).each( function ( idx ) {
		var column = table.column( idx );

		var list = $('<ul/>');
		var tags = $( column.header() ).hasClass('tags');
		var bins = that._binData( column.data().flatten(), tags );

		// On initialisation, do we need to set a filtering value from a
		// saved state or init option?
		var search = column.search();
		search = search.length && search[0] ?
			search[0].substr( 1, search[0].length-2 ).split('|') :
			[];

		var data = tags ?
			table.ajax.json().tags :
			column.data().unique().sort().toArray();

		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			if ( data[i] ) {
				var li = $('<li/>')
					.html( '<span class="label">'+data[i]+'</span>' )
					.data( 'filter', data[i] )
					.append( $('<span class="count" />').html( bins[ data[i] ] ) );

				if ( $.inArray( data[i], search ) !== -1 ) {
					li.addClass('selected');
				}

				list.append( li );
			}
		}

		$(container).append(
			$('<div class="pane"/>')
				.data( 'column', idx )
				.addClass( search.length ? 'filtering' : '' )
				.append( '<button type="button" class="close">&times;</button>' )
				.append( $('<div class="title"/>').html( $(column.header()).text() ) )
				.append( $('<div class="scroller"/>').append( list ) )
		);
	} );

	$(container).on( 'click', 'li', function () {
		if ( $(this).hasClass( 'selected' ) ) {
			$(this).removeClass( 'selected' );
		}
		else {
			$(this).addClass( 'selected' );
		}

		var pane = $(this).closest('div.pane');
		var filters = pane.find( 'li.selected' );

		if ( filters.length === 0 ) {
			pane.removeClass('filtering');
			table
				.column( pane.data('column') )
				.search('')
				.draw();
		}
		else {
			pane.addClass('filtering');
			table
				.column( pane.data('column') )
				.search( $.map( filters, function (filter) {
					return $(filter).data('filter');
				} ).join('|'), true, false )
				.draw();
		}
	} );


	$(container).on( 'click', 'button.close', function () {
		var pane = $(this).closest('div.pane');
		pane.find( 'li.selected' ).removeClass( 'selected' );
		pane.removeClass('filtering');

		table
			.column( pane.data('column') )
			.search('')
			.draw();
	} );
}


$.extend( SearchPanes.prototype, {
	_binData: function ( data, tags ) {
		var out = {};
		var add = function ( d ) {
			if ( ! out[ d ] ) {
				out[ d ] = 1;
			}
			else {
				out[ d ]++;
			}
		};

		data.each( function (d) {
			if ( ! d ) {
				return;
			}

			if ( tags ) {
				var a = d.split(',');
				for ( var i=0, ien=a.length ; i<ien ; i++ ) {
					add( a[i] );
				}
			}
			else {
				add( d );
			}
		} );

		return out;
	}
} );



$(document).on( 'init.dt', function (e, settings, json) {
	if ( e.namespace !== 'dt' ) {
		return;
	}

	var init = settings.oInit.searchPane;
	var defaults = DataTable.defaults.searchPane;

	if ( init || defaults ) {
		var opts = $.extend( {}, init, defaults );

		if ( init !== false ) {
			new SearchPanes( settings, opts  );
		}
	}
} );


}));
