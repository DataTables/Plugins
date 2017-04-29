/*! AlphabetSearch for DataTables v1.1.0
 * 2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     AlphabetSearch
 * @description Show an set of alphabet buttons alongside a table providing
 *     search input options
 * @version     1.1.1
 * @file        dataTables.alphabetSearch.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2014 SpryMedia Ltd.
 *
 * License      MIT - http://datatables.net/license/mit
 *
 * For more detailed information please see:
 *     http://datatables.net/blog/2014-09-22
 *     http://www.gyrocode.com/articles/jquery-datatables-alphabetical-search
 */
(function(){


// Search function
$.fn.dataTable.Api.register( 'alphabetSearch()', function ( searchTerm ) {
	this.iterator( 'table', function ( context ) {
		context.alphabetSearch.letter = searchTerm;
	} );

	return this;
} );

// Recalculate the alphabet display for updated data
$.fn.dataTable.Api.register( 'alphabetSearch.recalc()', function ( searchTerm ) {
	this.iterator( 'table', function ( context ) {
		draw(
			new $.fn.dataTable.Api( context ),
			$('div.alphabet', this.table().container()),
			context
		);
	} );

	return this;
} );


// Search plug-in
$.fn.dataTable.ext.search.push( function ( context, searchData ) {
	// Ensure that there is a search applied to this table before running it
	if ( ! context.alphabetSearch.letterSearch ) {
		return true;
	}

	var letter = searchData[context.alphabetSearch.column]
		.toString()
		.replace(/<.*?>/g, '')
		.charAt(0).toUpperCase();


	if(context.alphabetSearch.letterSearch !== '#'){
		if ( letter === context.alphabetSearch.letterSearch ) {
			return true;
		}
	} else {
		if(/\d/.test(letter)){
			return true;
		}
	}

	return false;
} );


// Order plug-in
//
// NOTES: If sorting by alphabetized column
// there would be two calls to this method
$.fn.dataTable.ext.order['alphabetSearch'] = function  ( context, col )
{
	var order_col    = this.api().order()[0][0];
	var order_method = this.api().order()[0][1];

	// If sorting by column other than the one being alphabetized
	if(order_col !== context.alphabetSearch.column){
		context.alphabetSearch.pass = 0;
	}

	var data = this.api().column( col, { order: 'index' } ).data().map( function (value, index) {
		// If sorting by alphabetized column
		return (order_col === context.alphabetSearch.column)
			? (
				// If first pass
				( !context.alphabetSearch.pass )
					// Ignore
					?
						''
					// Otherwise, if it's a second pass
					:
						(
							// If method is ascending sort
							( order_method === 'asc' )
								// Return first letter
								? value.charAt(0)
								: String.fromCharCode(65535 - value.charCodeAt(0))
						)
			)
			// Otherwise, if sorting by column other than the one being alphabetized,
			// return first letter
			: value.charAt(0);

	} );

	// If sorting by alphabetized column
	if(order_col === context.alphabetSearch.column){
		// If pass is not defined, set it to 0
		if(!context.alphabetSearchPass){ context.alphabetSearch.pass = 0; }
		// Increment pass counter and reset it to 0 if it's a second pass
		context.alphabetSearch.pass = (context.alphabetSearch.pass + 1) % 2;
	}

	return data;
};


// Private support methods
function bin ( data ) {
	var letter, bins = {};

	for ( var i=0, ien=data.length ; i<ien ; i++ ) {
		letter = data[i]
			.toString()
			.replace(/<.*?>/g, '')
			.charAt(0).toUpperCase();

		if(/\d/.test(letter)){ letter = '#'; }

		if ( bins[letter] ) {
			bins[letter]++;
		}
		else {
			bins[letter] = 1;
		}
	}

	return bins;
}

function draw ( table, alphabet, context )
{
	alphabet.empty();
	alphabet.append( context.oLanguage.alphabetSearch.infoDisplay + ': ' );

	var columnData = table.column(context.alphabetSearch.column, { search: 'applied' } ).data();
	var bins = bin( columnData );

	$('<span class="alphabet-clear' + ((!context.alphabetSearch.letter) ? ' active' : '') + '"/>')
		.data( 'letter', '' )
		.data( 'match-count', columnData.length )
		.html( context.oLanguage.alphabetSearch.infoAll )
		.appendTo( alphabet );

	for ( var i=0 ; i<context.oLanguage.alphabetSearch.alphabet.length ; i++ ) {
		var letter = context.oLanguage.alphabetSearch.alphabet[i];

		$('<span/>')
			.data( 'letter', letter )
			.data( 'match-count', bins[letter] || 0 )
			.addClass(
				(! bins[letter] ? 'empty' : '')
				+ ((context.alphabetSearch.letter === letter) ? ' active' : '')
			)
			.html(
				(letter === '#') ? '0-9' : letter
			)
			.appendTo( alphabet );
	}

	$('<div class="alphabet_info"></div>')
		.appendTo( alphabet );


	// Perform second rendering
	// needed to filter search results by letter
	// NOTE: Future optimization is needed to avoid rendering twice
	// when no search is performed

	// If letter is selected
	if(context.alphabetSearch.letter){
		// Apply filtering by letter
		context.alphabetSearch.letterSearch = context.alphabetSearch.letter;

		// Redraw table
		table.draw();

		// Remove filtering by letter
		context.alphabetSearch.letterSearch = '';
	}

	// Handle search event here only once
	// when alphabet panel has been drawn
	// because we are performing two-step rendering
	// that could trigger search hanlder when not needed
	table.one('search', function (e, context) {
		var api = new $.fn.dataTable.Api( context );

		// Redraw alphabet panel
		api.alphabetSearch.recalc();
	});
}


$.fn.dataTable.AlphabetSearch = function ( context ) {
	var table = new $.fn.dataTable.Api( context );
	var alphabet = $('<div class="alphabet"/>');

	// Language
	context.oLanguage.alphabetSearch =
		$.extend(
			{
				'alphabet': '#ABCDEFGHIJKLMNOPQRSTUVXYZ',
				'infoDisplay': 'Display',
				'infoAll': 'All'
			},
			((context.oLanguage.alphabetSearch)
				? context.oLanguage.alphabetSearch
				: {}
			)
		);
	// Convert alphabet to uppercase
	context.oLanguage.alphabetSearch.alphabet.toUpperCase();

	context.alphabetSearch =
		$.extend(
			{
				column: 0
			},
			$.isPlainObject(context.oInit.alphabetSearch) ? context.oInit.alphabetSearch : {},
			{
				letter: '',
				letterSearch: '',
				pass: 0
			}
		);

	// Set required "orderDataType" ("sSortDataType") for a column
	if(context.alphabetSearch.column >= 0 && context.alphabetSearch.column < context.aoColumns.length){
		context.aoColumns[context.alphabetSearch.column].sSortDataType = 'alphabetSearch';
	}

	// Add column containing names to a list of columns
	// where ordering will be always applied to the table
	if( context.hasOwnProperty('aaSortingFixed')
		 && typeof context.aaSortingFixed === 'object' )
	{
		if( $.isArray(context.aaSortingFixed) ){
			if( context.aaSortingFixed.length && !$.isArray( context.aaSortingFixed[0] ) ) {
				// 1D array
				context.aaSortingFixed = [[context.alphabetSearch.column, 'asc'], context.aaSortingFixed];

			} else {
				// 2D array
				context.aaSortingFixed.unshift([context.alphabetSearch.column, 'asc']);
			}
		} else {
			if( !context.aaSortingFixed.hasOwnProperty('pre') ){
				context.aaSortingFixed.pre = [];
			}

			if( context.aaSortingFixed.pre.length && !$.isArray( context.aaSortingFixed.pre[0] ) ) {
				// 1D array
				context.aaSortingFixed.pre = [[context.alphabetSearch.column, 'asc'], context.aaSortingFixed.pre];

			} else {
				// 2D array
				context.aaSortingFixed.pre.unshift([context.alphabetSearch.column, 'asc']);
			}
		}

	} else {
		context.aaSortingFixed = [context.alphabetSearch.column, 'asc'];
	}


	draw( table, alphabet, context );


	// Trigger a search
	alphabet.on( 'click', 'span', function () {
		alphabet.find( '.active' ).removeClass( 'active' );
		$(this).addClass( 'active' );

		table
			.alphabetSearch( $(this).data('letter') )
			.draw();
	} );

	// Mouse events to show helper information
	alphabet
		.on( 'mouseenter', 'span', function () {
			alphabet
				.find('div.alphabet_info')
				.css( {
					opacity: 1,
					left: $(this).position().left,
					width: $(this).width()
				} )
				.html( $(this).data('match-count') );
		} )
		.on( 'mouseleave', 'span', function () {
			alphabet
				.find('div.alphabet_info')
				.css('opacity', 0);
		} );

	table.on('draw', function (e, context) {
		var api = new $.fn.dataTable.Api( context );

		// Total number of column nodes
		var col_total = api.columns().nodes().length;

		var rows = api.rows({ page: 'current' }).nodes();
		var group_last = null;

		api.column(context.alphabetSearch.column, { page: 'current' }).data().each(function (name, index){
			var group = name.charAt(0).toUpperCase();

			if (group_last !== group) {
				$(rows).eq(index).before(
					'<tr class="alphabet_group"><td colspan="' + col_total + '">' + group + '</td></tr>'
				);

				group_last = group;
			}
		});

		// If there are no rows found and letter is selected
		if(!rows.length && context.alphabetSearch){
			var letter = (context.alphabetSearch.letter === '#') ? '0-9' : context.alphabetSearch.letter;

			$(api.table().body()).prepend(
				'<tr class="alphabet_group"><td colspan="' + col_total + '">' + letter + '</td></tr>'
			);
		}
	});

	// API method to get the alphabet container node
	this.node = function () {
		return alphabet;
	};
};

$.fn.DataTable.AlphabetSearch = $.fn.dataTable.AlphabetSearch;


// Register a search plug-in
$.fn.dataTable.ext.feature.push( {
	fnInit: function ( settings ) {
		var search = new $.fn.dataTable.AlphabetSearch( settings );
		return search.node();
	},
	cFeature: 'A'
} );


}());
